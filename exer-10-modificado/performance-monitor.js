// performance-monitor.js - Performance monitoring script
const fs = require('fs');
const path = require('path');

async function monitorPerformance() {
  try {
    const files = ['estilos.css', 'script.js', 'index.html'];
    const results = {};
    
    for (const file of files) {
      const filePath = path.join(__dirname, file);
      const stats = fs.statSync(filePath);
      const size = stats.size;
      
      results[file] = {
        size: size,
        sizeKB: (size / 1024).toFixed(2),
        lastModified: stats.mtime.toISOString()
      };
    }
    
    // Check file sizes against performance budgets
    const budgets = {
      'estilos.css': 50 * 1024, // 50KB
      'script.js': 20 * 1024, // 20KB
      'index.html': 12 * 1024 // 12KB (more realistic)
    };
    
    const violations = [];
    
    for (const [file, budget] of Object.entries(budgets)) {
      if (results[file].size > budget) {
        violations.push(`${file}: ${(results[file].size / 1024).toFixed(2)}KB > ${(budget / 1024).toFixed(2)}KB`);
      }
    }
    
    console.log('📊 Resultados del monitoreo de rendimiento:');
    Object.entries(results).forEach(([file, data]) => {
      console.log(`  ${file}: ${data.sizeKB}KB (${data.lastModified})`);
    });
    
    if (violations.length > 0) {
      console.log('\n⚠️  Violaciones de presupuesto de rendimiento:');
      violations.forEach(violation => {
        console.log(`  ✗ ${violation}`);
      });
      process.exit(1);
    } else {
      console.log('\n✓ Todos los presupuestos de rendimiento cumplidos');
    }
    
  } catch (error) {
    console.error('✗ Error al monitorear rendimiento:', error.message);
    process.exit(1);
  }
}

monitorPerformance();