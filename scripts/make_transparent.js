const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processLogo() {
  const inputPath = 'C:/Users/USER/.gemini/antigravity-ide/brain/214de544-9a9c-438c-8226-53aeb447e65c/media__1785329168321.png';
  const publicDir = path.join(__dirname, '../public');
  const appDir = path.join(__dirname, '../app');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log('Reading input image:', inputPath);
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image dimensions: ${width}x${height}, channels: ${channels}`);

  // Loop through pixels and make white/near-white pixels transparent
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If pixel is white or near-white (background)
    if (r > 225 && g > 225 && b > 225) {
      data[i + 3] = 0; // Alpha = 0 (transparent)
    }
  }

  const transparentLogoBuffer = await sharp(data, {
    raw: { width, height, channels },
  })
    .png()
    .toBuffer();

  const logoPath = path.join(publicDir, 'logo.png');
  fs.writeFileSync(logoPath, transparentLogoBuffer);
  console.log('Saved transparent logo to:', logoPath);

  // Also save a cropped icon for tab / favicon in app/icon.png
  const iconPath = path.join(appDir, 'icon.png');
  await sharp(transparentLogoBuffer)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(iconPath);
  console.log('Saved tab favicon to:', iconPath);

  // Save in public directory too for easy fallback referencing
  const publicIconPath = path.join(publicDir, 'icon.png');
  await sharp(transparentLogoBuffer)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(publicIconPath);
  console.log('Saved public favicon to:', publicIconPath);
}

processLogo().catch((err) => {
  console.error('Error processing logo:', err);
  process.exit(1);
});
