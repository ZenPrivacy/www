const fs = require("fs");
const path = require("path");

const REPO = "ZenPrivacy/zen-desktop";
const MARKUP_PATH = path.join(
  __dirname,
  "..",
  "themes",
  "zen",
  "layouts",
  "index.html"
);

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

function updateMarkup(display) {
  const html = fs.readFileSync(MARKUP_PATH, "utf-8");
  const pattern = /(<!-- star-count -->[\s\S]*?)(\S+)( GitHub stars)/;
  const match = html.match(pattern);
  if (!match) {
    console.error("Could not find star-count marker in markup");
    process.exit(1);
  }

  const current = match[2];
  if (current === display) {
    console.log(`Count unchanged at ${display}`);
    return { changed: false, current };
  }

  const updated = html.replace(pattern, `$1${display}$3`);
  fs.writeFileSync(MARKUP_PATH, updated, "utf-8");
  console.log(`Updated count from ${current} to ${display}`);
  return { changed: true, current };
}

async function main() {
  const total = await fetchStarCount();
  const display = formatCount(total);
  console.log(`Total stars: ${total} -> ${display}`);

  const { changed, current } = updateMarkup(display);

  // Write outputs for the GitHub Actions workflow.
  const outputFile = process.env.GITHUB_OUTPUT;
  if (outputFile) {
    fs.appendFileSync(
      outputFile,
      `total=${total}\ndisplay=${display}\ncurrent=${current}\nchanged=${changed}\n`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
