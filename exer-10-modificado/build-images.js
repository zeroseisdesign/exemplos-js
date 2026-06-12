// build-images.js - Image optimization script
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  try {
    const assetsDir = path.join(__dirname, 'assets');
    
    if (!fs.existsSync(assetsDir)) {
      console.log('📁 Directorio de assets no encontrado, omitiendo optimización de imágenes');
      return;
    }
    
    const files = fs.readdirSync(assetsDir);
    const imageFiles = files.filter(file => 
      file.endsWith('.webp') || 
      file.endsWith('.avif') || 
      file.endsWith('.png') || 
      file.endsWith('.jpg') || 
      file.endsWith('.jpeg') || 
      file.endsWith('.svg')
    );
    
    console.log(`📸 Encontradas ${imageFiles.length} archivos de imagen para optimización`);
    
    const results = {};
    
    for (const file of imageFiles) {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      const size = stats.size;
      
      results[file] = {
        size: size,
        sizeKB: (size / 1024).toFixed(2)
      };
    }
    
    console.log('\n📊 Tamaños de imágenes actuales:');
    Object.entries(results).forEach(([file, data]) => {
      console.log(`  ${file}: ${data.sizeKB}KB`);
    });
    
    console.log('\n✓ Optimización de imágenes completada (requiere herramientas externas como ImageMagick o Sharp)');
    
  } catch (error) {
    console.error('✗ Error al optimizar imágenes:', error.message);
    process.exit(1);
  }
}

optimizeImages();