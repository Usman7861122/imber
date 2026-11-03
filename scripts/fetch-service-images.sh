#!/usr/bin/env bash
# Downloads the service photos from the live site into public/images/services/.
# Run once on a computer with internet:  bash scripts/fetch-service-images.sh
# Then set SERVICE_IMG_BASE in src/data/services.ts to '/images/services/'.
set -e
cd "$(dirname "$0")/.."
mkdir -p public/images/services
BASE="https://imbermedical.com/wp-content/uploads/2026/09"
for f in TWP-2019-01-25-114as.jpg TWP-2019-01-25-058as.jpg TWP-2019-01-25-190as.jpg TWP-2019-01-25-094as-1.jpg \
         TWP-2019-01-25-217as.jpg TWP-2019-01-25-054as.jpg TWP-2019-01-25-125as.jpg ChatGPT-Image-Sep-4-2026-09_16_42-PM.png; do
  curl -fsSL "$BASE/$f" -o "public/images/services/$f" && echo "ok  $f"
done
curl -fsSL "https://imbermedical.com/wp-content/uploads/2026/08/imber-outside.webp" -o "public/images/imber-outside.webp" && echo "ok  imber-outside.webp"
curl -fsSL "https://imbermedical.com/wp-content/uploads/2026/03/eptide-therapy-pasadena-ca-skinfx.jpeg" -o "public/images/peptides.jpeg" && echo "ok  peptides.jpeg"
# Decade photos (20's - 60's)
for u in 2026/03/image-20s.webp 2026/03/background-2-2.jpg 2026/03/40s-image-e1774986242244.webp 2026/03/imge-50s.webp 2026/08/sixty.jpg; do
  curl -fsSL "https://imbermedical.com/wp-content/uploads/$u" -o "public/images/decades-$(basename $u)" && echo "ok  decades-$(basename $u)"
done
curl -fsSL "https://imbermedical.com/wp-content/uploads/2026/04/facial-.png" -o "public/images/facial.png" && echo "ok  facial.png"
curl -fsSL "https://imbermedical.com/wp-content/uploads/2026/03/webres_3V2A2795-1-1-scaled-e1772645506600.jpg" -o "public/images/team.jpg" && echo "ok  team.jpg"
for f in PTD-3_540x.jpg Ignight-2_540x.webp Duo-1_61791005-3fd9-4c47-9aa6-d6c53b93fce1_540x.webp MethylatedBComplex-2_540x.webp BPCrapidpro_c613f29f-65fa-48db-aecc-4a39151dd3aa_540x.webp abstubs_540x.webp openart-image_8gJ_Wyi0_1758672058717_raw_540x.webp DHHB-2_540x.webp NMN-2_540x.webp GIPrime-3_540x.webp; do
  mkdir -p public/images/products; curl -fsSL "https://imbermedical.com/wp-content/uploads/2026/03/$f" -o "public/images/products/$f" && echo "ok  $f"
done
