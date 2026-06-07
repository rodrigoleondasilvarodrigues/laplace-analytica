const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const carrossel = process.argv[2];

if (!carrossel) {
  console.error('Uso: node exportar.js carrossel-01');
  process.exit(1);
}

// Extrai o número do carrossel: "carrossel-06" → "06"
const carrosselNum = carrossel.replace('carrossel-', '');

const htmlPath = path.resolve(__dirname, carrossel, 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error(`Arquivo não encontrado: ${htmlPath}`);
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Aguarda a fonte Outfit carregar
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 800));

  const slides = await page.$$('.slide');

  if (slides.length === 0) {
    console.error('Nenhum slide encontrado no HTML.');
    await browser.close();
    process.exit(1);
  }

  console.log(`\n📦 ${carrossel} — ${slides.length} slides encontrados\n`);

  for (let i = 0; i < slides.length; i++) {
    const position = String(i + 1).padStart(2, '0');
    const filename = `cr-slide-${position}-${carrosselNum}.png`;
    const outPath = path.resolve(__dirname, carrossel, filename);

    await slides[i].screenshot({
      path: outPath,
      type: 'png',
    });

    console.log(`  ✓ ${filename}`);
  }

  await browser.close();
  console.log(`\n✅ PNGs salvos em: saidas/carrosseis/${carrossel}/\n`);
})();
