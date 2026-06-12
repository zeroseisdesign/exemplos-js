// build-css.js - CSS minification script
const fs = require('fs');
const postcss = require('postcss');
const cssnano = require('cssnano');

async function buildCSS() {
  try {
    const cssContent = fs.readFileSync('estilos.css', 'utf8');
    
    const result = await postcss([cssnano()]).process(cssContent, {
      from: 'estilos.css',
      to: 'estilos.min.css'
    });
    
    fs.writeFileSync('estilos.min.css', result.css);
    console.log('✓ CSS minificado: estilos.min.css');
    
    // Generate source map
    if (result.map) {
      fs.writeFileSync('estilos.min.css.map', result.map.toString());
      console.log('✓ Mapa de fuentes generado: estilos.min.css.map');
    }
    
  } catch (error) {
    console.error('✗ Error al minificar CSS:', error.message);
    process.exit(1);
  }
}

buildCSS();