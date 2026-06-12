// build-js.js - JavaScript minification script
const fs = require('fs');
const { minify } = require('terser');

async function buildJS() {
  try {
    const jsContent = fs.readFileSync('script.js', 'utf8');
    
    const result = await minify(jsContent, {
      mangle: true,
      compress: true,
      format: {
        comments: false
      }
    });
    
    fs.writeFileSync('script.min.js', result.code);
    console.log('✓ JavaScript minificado: script.min.js');
    
  } catch (error) {
    console.error('✗ Error al minificar JavaScript:', error.message);
    process.exit(1);
  }
}

buildJS();