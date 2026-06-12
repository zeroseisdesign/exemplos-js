// test-accessibility.js - Accessibility testing script
const fs = require('fs');

async function testAccessibility() {
  try {
    const htmlContent = fs.readFileSync('index.html', 'utf8');
    const cssContent = fs.readFileSync('estilos.css', 'utf8');
    
    const issues = [];
    
    // Test HTML accessibility
    if (!htmlContent.includes('lang=')) {
      issues.push('HTML missing lang attribute');
    }
    
    if (!htmlContent.includes('<!DOCTYPE html>')) {
      issues.push('Missing DOCTYPE declaration');
    }
    
    if (!htmlContent.includes('aria-label=') && !htmlContent.includes('alt=')) {
      issues.push('Missing ARIA labels or alt attributes');
    }
    
    // Test CSS accessibility
    if (!cssContent.includes('contrast') && !cssContent.includes('var(--color-primary)')) {
      issues.push('CSS missing contrast checks or CSS variables');
    }
    
    if (!cssContent.includes('focus')) {
      issues.push('CSS missing focus styles');
    }
    
    if (!htmlContent.includes('loading="lazy"')) {
      issues.push('Missing lazy loading for images');
    }
    
    if (issues.length > 0) {
      console.log('⚠️  Problemas de accesibilidad encontrados:');
      issues.forEach((issue, index) => {
        console.log(`  ${index + 1}. ${issue}`);
      });
      process.exit(1);
    } else {
      console.log('✓ Todos los controles de accesibilidad pasaron');
    }
    
  } catch (error) {
    console.error('✗ Error al probar accesibilidad:', error.message);
    process.exit(1);
  }
}

testAccessibility();