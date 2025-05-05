const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const splashScreens = [
  { width: 2048, height: 2732 }, // 12.9" iPad Pro
  { width: 1668, height: 2388 }, // 11" iPad Pro
  { width: 1536, height: 2048 }, // 10.5" iPad Pro
  { width: 1125, height: 2436 }, // iPhone X/XS
  { width: 1242, height: 2688 }, // iPhone XS Max
];

const inputFile = path.join(__dirname, '../src/assets/Logo.png');
const outputDir = path.join(__dirname, '../public/icons');

async function generateIcons() {
  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Generate app icons
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 26, g: 54, b: 93, alpha: 1 } // #1a365d background
        })
        .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
      
      console.log(`Generated ${size}x${size} icon`);
    }

    // Generate splash screens
    for (const { width, height } of splashScreens) {
      // Calculate logo size (40% of the smaller dimension)
      const logoSize = Math.min(width, height) * 0.4;
      
      // Create a background with theme color
      const background = await sharp({
        create: {
          width,
          height,
          channels: 4,
          background: { r: 26, g: 54, b: 93, alpha: 1 } // #1a365d background
        }
      })
      .png()
      .toBuffer();

      // Resize logo and place it in the center
      await sharp(inputFile)
        .resize(Math.round(logoSize), Math.round(logoSize), {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toBuffer()
        .then(async (logo) => {
          await sharp(background)
            .composite([{
              input: logo,
              top: Math.round((height - logoSize) / 2),
              left: Math.round((width - logoSize) / 2)
            }])
            .toFile(path.join(outputDir, `splash-${width}x${height}.png`));
        });
      
      console.log(`Generated ${width}x${height} splash screen`);
    }

    console.log('All assets generated successfully!');
  } catch (error) {
    console.error('Error generating assets:', error);
  }
}

generateIcons(); 