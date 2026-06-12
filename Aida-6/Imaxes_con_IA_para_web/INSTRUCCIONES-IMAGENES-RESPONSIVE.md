# 📸 Instrucciones de Optimización de Imágenes Responsive

## Estructura de Imágenes Requeridas

Tu página web está configurada para servir múltiples versiones de cada imagen según:
- **Tamaño de pantalla** (mobile, tablet, desktop)
- **Densidad de píxeles** (pantallas retina 2x)

---

## 🖼️ Variantes Necesarias por Sección

### 1. CARRUSEL (6 imágenes)

**Archivos Base:** Foto1, foto2, Foto3, Foto4, Foto5, Foto6

**Variantes a crear:**
```
Foto1-480.avif      (480px ancho)
Foto1-800.avif      (800px ancho)
Foto1-1200.avif     (1200px ancho)
Foto1-480@2x.avif   (480px x 2 - retina)
Foto1-800@2x.avif   (800px x 2 - retina)
Foto1-1200@2x.avif  (1200px x 2 - retina)

(Repetir para foto2, Foto3, Foto4, Foto5, Foto6)
```

**Tamaños recomendados (aprox):**
- 480px: 480×320px (móvil vertical)
- 800px: 800×533px (tablet)
- 1200px: 1200×800px (desktop)

---

### 2. GALERÍA (6 imágenes)

**Archivos Base:** Las mismas (Foto1-6)

**Variantes a crear:**
```
Foto1-300.avif      (300px ancho)
Foto1-600.avif      (600px ancho)
Foto1-900.avif      (900px ancho)
Foto1-300@2x.avif   (300px x 2 - retina)
Foto1-600@2x.avif   (600px x 2 - retina)
Foto1-900@2x.avif   (900px x 2 - retina)

(Repetir para foto2-6)
```

**Tamaños recomendados:**
- 300px: 300×300px (móvil)
- 600px: 600×600px (tablet)
- 900px: 900×900px (desktop)

---

### 3. BANNER DE SERVICIOS

**Archivo Base:** banner

**Variantes a crear:**
```
banner-960.avif     (960px ancho)
banner-1200.avif    (1200px ancho)
banner-1600.avif    (1600px ancho - máximo)
banner-960@2x.avif  (960px x 2 - retina)
banner-1200@2x.avif (1200px x 2 - retina)
banner-1600@2x.avif (1600px x 2 - retina)
```

**Tamaños recomendados:**
- 960px: 960×250px (tablet)
- 1200px: 1200×312px (desktop)
- 1600px: 1600×416px (desktop grande)

---

## 🛠️ Cómo Crear estas Variantes

### Opción 1: GIMP (Gratuito)
1. Abre la imagen original
2. Imagen → Escalar imagen
3. Introduce el ancho deseado (mantén proporción)
4. Archivo → Exportar como → .avif
5. Ajusta compresión (80-85% calidad)

### Opción 2: ImageMagick (CLI)
```bash
# Para 480px
magick Foto1.avif -resize 480x \
       -quality 85 Foto1-480.avif

# Para retina 960px
magick Foto1.avif -resize 960x \
       -quality 85 Foto1-480@2x.avif
```

### Opción 3: Photoshop
1. Imagen → Tamaño de imagen
2. Especifica ancho en píxeles
3. Archivo → Exportar como
4. Formato: AVIF
5. Calidad: 80-85

### Opción 4: Figma + Plugin
- Importa imagen en Figma
- Redimensiona el frame
- Exporta en AVIF (en Figma 2.0+)

---

## 📊 Resumen Total de Archivos a Crear

| Sección | Imágenes | Variantes | Total |
|---------|----------|-----------|-------|
| Carrusel | 6 | 6 c/u | 36 |
| Galería | 6 | 6 c/u | 36 |
| Banner | 1 | 6 | 6 |
| **TOTAL** | | | **78 archivos** |

*Nota: Puedes reutilizar las mismas imágenes (Foto1-6) para carrusel y galería, solo cambian los tamaños*

---

## ✅ Validación

Verifica que:
1. ✓ Todos los archivos tienen el nombre exacto según convención
2. ✓ Se encuentran en la carpeta `assets/`
3. ✓ Están en formato AVIF (o ajusta el HTML)
4. ✓ Las proporciones mantienen aspecto ratio original
5. ✓ La calidad se mantiene en 80-85% de compresión

---

## 🚀 Por qué Usar Responsive Images

- **Móviles**: Descargan 480px (menor peso)
- **Tablets**: Descargan 800-900px (equilibrio)
- **Desktop**: Descargan 1200-1600px (máxima calidad)
- **Retina**: Navegador elige automáticamente versión @2x
- **Resultado**: Página más rápida, mejor experiencia

---

## 📝 Notas Adicionales

- El navegador elige automáticamente según `sizes`
- Los `sizes` están optimizados para breakpoints móviles
- AVIF es más eficiente que WebP (~30% menos peso)
- Los `@2x` son para iPhones, iPad, Macs retina
- Puedes agregar más variantes si necesitas más puntos de corte

---

## 🔗 Herramientas Recomendadas

| Tarea | Herramienta | Costo |
|-------|-----------|-------|
| Redimensionar en lote | ImageMagick | Gratis |
| Edición rápida | GIMP | Gratis |
| Profesional | Photoshop | 🔴 Pago |
| Web-based | Tinypng.com | Gratis (50/mes) |
| Optimización | Squoosh.app | Gratis |

