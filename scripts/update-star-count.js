const fs = require("fs");
const path = require("path");

const REPO = "ZenPrivacy/zen-desktop";
const THEMES_DIR = path.join(__dirname, "..", "themes", "zen", "layouts");
const FILES = [
  {
    path: path.join(THEMES_DIR, "index.html"),
    pattern: /(<!-- star-count -->[\s\S]*?)(\S+)( GitHub stars)/,
  },
  {
    path: path.join(THEMES_DIR, "_default", "baseof.html"),
    pattern: /(<!-- star-count-badge -->[\s\S]*?>)(\S+)( ★<)/,
    plus: false,
  },
];

async function fetchStarCount() {
  const url = `https://api.github.com/repos/${REPO}`;
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) {
    throw new Error(`GitHub API returned ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  return data.stargazers_count;
}

function formatCount(total) {
  const rounded = Math.floor(total / 100) * 100;
  if (rounded >= 1000) {
    const k = rounded / 1000;
    return `${k}k+`;
  }
  return `${rounded}+`;
}

function updateFile(filePath, pattern, display, plus) {
  if (!plus) display = display.replace(/\+$/, "");
  const html = fs.readFileSync(filePath, "utf-8");
  const match = html.match(pattern);
  if (!match) {
    console.error(`Could not find star-count marker in ${filePath}`);
    process.exit(1);
  }

  const current = match[2];
  if (current === display) {
    console.log(`${filePath}: count unchanged at ${display}`);
    return { changed: false, current };
  }

  const updated = html.replace(pattern, `$1${display}$3`);
  fs.writeFileSync(filePath, updated, "utf-8");
  console.log(`${filePath}: updated count from ${current} to ${display}`);
  return { changed: true, current };
}

async function main() {
  const total = await fetchStarCount();
  const display = formatCount(total);
  console.log(`Total stars: ${total} -> ${display}`);

  let anyChanged = false;
  let firstCurrent = null;
  for (const file of FILES) {
    const { changed, current } = updateFile(file.path, file.pattern, display, file.plus !== false);
    if (firstCurrent === null) firstCurrent = current;
    if (changed) anyChanged = true;
  }

  // Write outputs for the GitHub Actions workflow.
  const outputFile = process.env.GITHUB_OUTPUT;
  if (outputFile) {
    fs.appendFileSync(
      outputFile,
      `total=${total}\ndisplay=${display}\ncurrent=${firstCurrent}\nchanged=${anyChanged}\n`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
