// Generates a base64-encoded land mask for the VPN globe.
// Usage: node scripts/generate-land-mask.js [path-to-land.geojson]
//
// If no path is given, downloads Natural Earth 110m land polygons from GitHub.
// Output: a base64 string printed to stdout, ready to embed in vpn.js.

const fs = require("fs");

const GEOJSON_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson";

// Grid resolution in degrees.
const STEP = 1.5;
const ROWS = Math.floor(180 / STEP); // lat bands  (120)
const COLS = Math.floor(360 / STEP); // lon bands  (240)

// --- Point-in-polygon (ray casting) ---

function pointInRing(lon, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0],
      yi = ring[i][1];
    const xj = ring[j][0],
      yj = ring[j][1];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function pointInPolygon(lon, lat, coords) {
  // coords[0] = outer ring, coords[1..] = holes
  if (!pointInRing(lon, lat, coords[0])) return false;
  for (let h = 1; h < coords.length; h++) {
    if (pointInRing(lon, lat, coords[h])) return false;
  }
  return true;
}

function pointInFeature(lon, lat, feature) {
  const geom = feature.geometry;
  if (geom.type === "Polygon") {
    return pointInPolygon(lon, lat, geom.coordinates);
  }
  if (geom.type === "MultiPolygon") {
    for (const poly of geom.coordinates) {
      if (pointInPolygon(lon, lat, poly)) return true;
    }
  }
  return false;
}

// --- Main ---

async function main() {
  let geojsonText;
  const arg = process.argv[2];

  if (arg) {
    geojsonText = fs.readFileSync(arg, "utf-8");
  } else {
    console.error("Downloading Natural Earth 110m land polygons...");
    const res = await fetch(GEOJSON_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
    geojsonText = await res.text();
  }

  const geojson = JSON.parse(geojsonText);
  const features = geojson.features;
  console.error(`Loaded ${features.length} features, grid ${ROWS}x${COLS} (${ROWS * COLS} cells)`);

  const bits = new Uint8Array(Math.ceil((ROWS * COLS) / 8));

  let landCount = 0;
  for (let row = 0; row < ROWS; row++) {
    const lat = 90 - (row + 0.5) * STEP; // top to bottom
    for (let col = 0; col < COLS; col++) {
      const lon = -180 + (col + 0.5) * STEP;
      let isLand = false;
      for (const f of features) {
        if (pointInFeature(lon, lat, f)) {
          isLand = true;
          break;
        }
      }
      if (isLand) {
        const idx = row * COLS + col;
        bits[idx >> 3] |= 1 << (7 - (idx & 7));
        landCount++;
      }
    }
  }

  console.error(`Land cells: ${landCount} / ${ROWS * COLS}`);

  const base64 = Buffer.from(bits).toString("base64");
  console.log(base64);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
