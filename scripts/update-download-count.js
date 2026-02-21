const fs = require("fs");
const path = require("path");

const REPO = "ZenPrivacy/zen-desktop";
const ASSETS = [
  "Zen_darwin_amd64.tar.gz",
  "Zen_darwin_amd64_noselfupdate.tar.gz",
  "Zen_darwin_arm64.tar.gz",
  "Zen_darwin_arm64_noselfupdate.tar.gz",
  "Zen_windows_amd64.zip",
  "Zen_windows_arm64.zip",
  "Zen_linux_amd64_noselfupdate.tar.gz",
  "Zen_linux_arm64_noselfupdate.tar.gz",
];
const MARKUP_PATH = path.join(
  __dirname,
  "..",
  "themes",
  "zen",
  "layouts",
  "index.html"
);

async function fetchAllReleases() {
  const releases = [];
  let page = 1;
  while (true) {
    const url = `https://api.github.com/repos/${REPO}/releases?per_page=100&page=${page}`;
    const res = await fetch(url, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}: ${await res.text()}`);
    }
    const batch = await res.json();
    if (batch.length === 0) break;
    releases.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return releases;
}

function countDownloads(releases) {
  const assetSet = new Set(ASSETS);
  let total = 0;
  for (const release of releases) {
    for (const asset of release.assets) {
      if (assetSet.has(asset.name)) {
        total += asset.download_count;
      }
    }
  }
  return total;
}

function formatCount(total) {
  const rounded = Math.floor(total / 5000) * 5;
  return `${rounded}k+`;
}

function updateMarkup(display) {
  const html = fs.readFileSync(MARKUP_PATH, "utf-8");
  const pattern = /(<!-- download-count -->\s*\n\s*<span>)([^<]*?)( downloads<\/span>)/;
  const match = html.match(pattern);
  if (!match) {
    console.error("Could not find download-count marker in markup");
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
  const releases = await fetchAllReleases();
  const total = countDownloads(releases);
  const display = formatCount(total);
  console.log(`Total downloads: ${total} -> ${display}`);

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
