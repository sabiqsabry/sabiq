#!/usr/bin/env bash
# Rebuild "Drive or Ride?" for the /tools/drive-or-ride/ sub-path and copy it into public/.
# Needs .env.local in the source folder (Google Maps key etc. - never commit it here).
set -euo pipefail

SRC="${DRIVE_OR_RIDE_SRC:-$HOME/Desktop/Coding/Projects/Petrol Figurator}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/tools/drive-or-ride"
OUT="$(mktemp -d)"

cd "$SRC"
[ -f .env.local ] || { echo "Missing $SRC/.env.local" >&2; exit 1; }
npx tsc -b
BASE_PATH=/tools/drive-or-ride/ npx vite build --outDir "$OUT" --emptyOutDir

rm -rf "$DEST"
mkdir -p "$DEST"
cp -R "$OUT"/. "$DEST"/
rm -rf "$OUT"
echo "Synced Drive or Ride? -> $DEST"
