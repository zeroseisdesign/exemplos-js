Imágenes de proyecto estilo nórdico (SVG)

Contenido:
- assets/project-01.svg
- assets/project-02.svg
- assets/project-03.svg
- assets/project-04.svg
- assets/project-05.svg

Conversión a WebP (opciones):

1) Usando ImageMagick (`magick` en Windows):

```bash
magick convert assets/project-01.svg -resize 600x600 assets/project-01.webp
magick convert assets/project-02.svg -resize 600x600 assets/project-02.webp
magick convert assets/project-03.svg -resize 600x600 assets/project-03.webp
magick convert assets/project-04.svg -resize 600x600 assets/project-04.webp
magick convert assets/project-05.svg -resize 600x600 assets/project-05.webp
```

2) Usando `cwebp` (recomendado para control de calidad):

Primero convierta SVG a PNG (rasterizar) luego a WebP:

```bash
magick convert assets/project-01.svg -resize 600x600 assets/project-01.png
cwebp -q 90 assets/project-01.png -o assets/project-01.webp
```

Ajuste `-q` para cambiar la calidad (0-100).

Vista previa rápida:
Abra `preview.html` en el navegador para ver las 5 imágenes SVG en 600×600.
