# Proxecto · Efectos especiais e interacción

Portfolio de **Nordic Studio**, estudo de deseño dixital minimalista.
Este documento recolle as xustificacións, o procedemento de optimización de imaxes, o uso de `srcset`/`picture` e os prompts do exercicio de IA.

---

## Parte 1 · Optimización de imaxes

### Táboa de redimensionamento

| Imaxe orixinal | Uso previsto   | Ancho final | Formato escollido | Razón                                                                 |
| -------------- | -------------- | ----------- | ----------------- | --------------------------------------------------------------------- |
| imaxe1.jpg (4000px) | Hero          | 1600px      | JPG + WebP        | Fotografía grande → JPG como base, WebP para reducir ~30 % o peso     |
| imaxe2.jpg (3500px) | Galería       | 1200px      | JPG + WebP + AVIF | WebP/AVIF para aforrar ancho de banda mantendo calidade              |
| imaxe3.jpg (5000px) | Thumbnails    | 300px       | JPG + WebP        | Imaxe moi grande reducida a miniatura → moi lixeira                  |
| logo.png (2000px)   | Identidade    | 200–400px   | SVG (vectorial)   | Logo debe escalar sen perda → SVG editable con CSS                   |

> Para o hero xeramos 3 versións: **800, 1200 e 1600 px**, escollidas polo navegador en función do viewport mediante `picture` + `srcset`.

### Por que non usar as imaxes orixinais?

1. **Peso excesivo**: unha foto de 5000px pode superar os 8–12 MB. Unha web que carga varios MB por imaxe tarda máis en estar lista, prexudicando a experiencia de usuario e o SEO.
2. **Desperdicio de ancho de banda**: nun móbil unha pantalla de 400px nunca vai renderizar 5000px. O navegador acaba reducindo a imaxe igualmente, pero o usuario pagou a descarga completa.
3. **Consumo de memoria**: o navegador descodifica a imaxe completa mesmo cando se mostra pequena, ocupando RAM innecesaria.
4. **Velocidade de carga**: Google penaliza páxinas con Largest Contentful Paint (LCP) elevado. Un hero non optimizado prexudica o LCP.
5. **Compatibilidade eアクセシビリティ**: `srcset`/`picture` permiten servir versións axeitadas a cada dispositivo e pantalla retina (2x), evitando servir unha imaxe "suficiente" pero pixerada.

### Formato escollido en cada caso

- **Hero e fotografías realistas → JPG + WebP**: WebP ofrece 25–35 % menos peso que JPG cunha calidade visual equivalente. Servimos JPG como fallback.
- **Galería → JPG + WebP + AVIF**: o navegador escolle o mellor formato dispoñible. AVIF ofrece a mellor compresión pero require maior compatibilidade.
- **Thumbnails → JPG**: 300px é un tamaño tan pequeno que a diferenza WebP/JPG é mínima; mantemos JPG por compatibilidade.
- **Logo → SVG**: é vectorial, escala perfectamente, pódese editar con CSS (`fill: currentColor;`) e pesa uns poucos KB.

---

## Parte 2 · Responsive con `srcset`

A galería utiliza tres versións da mesma imaxe:

- `galeria-300.jpg` → 300w
- `galeria-800.jpg` → 800w
- `galeria-1200.jpg` → 1200w

```html
<img
  src="imaxes/galeria-800.jpg"
  srcset="imaxes/galeria-300.jpg 300w,
          imaxes/galeria-800.jpg 800w,
          imaxes/galeria-1200.jpg 1200w"
  sizes="(max-width: 600px) 300px,
         (max-width: 1000px) 800px, 1200px"
  alt="Exemplo responsive"
  loading="lazy">
```

Como decide o navegador:

1. Le o atributo `sizes` para coñecer o ancho real que ocupará a imaxe no layout.
2. Compara ese ancho coas opcións do `srcset` (descriptores `w`).
3. Ten en conta a densidade de píxeles: nunha pantalla retina 2x, para un slot de 400px lóxicos escollerá a imaxe de 800w para manter nitidez.

Adicionalmente, `<picture>` permite engadir fontes en **WebP/AVIF** mantendo `<img>` como fallback JPG.

---

## Parte 3 · Estrutura HTML

1. **Hero principal** – Imaxe de fondo con `<picture>`, título, subtítulo e botón CTA.
2. **Galería** – Grid CSS de 6 imaxes con `srcset`, `sizes`, `loading="lazy"` e `<picture>` para WebP/AVIF.
3. **Carrusel** – 3 diapositivas con control manual (frechas, dots) e autoplay que se pausa ao pasar o rato.
4. **Sección de contacto** – CTA final.
5. **Footer** – Créditos e idioma.

---

## Parte 4 · Efectos visuais con CSS

Efectos obrigatorios aplicados:

- **Hover con zoom suave** → `transform: scale(1.07)` ao pasar o rato.
- **Transición fluída** → `transition: transform 0.35s cubic-bezier(...)`.
- **Filtro en escala de grises inicial** → `filter: grayscale(100%) contrast(95%)` que vira a cor completa en hover.

Extras incluídos:

- **Backdrop-filter** no header (efecto vidro).
- **Animación fadeUp** no hero ao cargar.
- **Ken Burns** suave nas diapositivas activas do carrusel.
- **Mask-image / gradientes** nos overlays.
- **`prefers-reduced-motion`** para respectar a accesibilidade.

---

## Exercicio IA · Nordic Studio

### Fase 1 · Prompts base

#### 1. Hero principal (1920×900)
```
Hero image para web corporativa dun estudio de deseño minimalista,
estilo escandinavo contemporáneo, mostrando unha oficina luminosa
con ventás grandes e escritorio de madeira clara. Iluminación
natural suave desde a esquerda, ambiente profesional e tranquilo,
profundidade de campo reducida, paleta neutra (branco, gris cálido,
verde salvia). Formato panorámico horizontal, 1920x900,
alta calidade, listo para web.
```

#### 2. Thumbnail para galería (600×600)
```
Imaxe cadrada para miniatura de portfolio, estilo minimalista
escandinavo, mostrando un detalle arquitectónico de interior
(mesa de traballo con portátil, caderno e planta verde).
Fondo branco limpo, luz natural de xanela, estética coherente
con branding nórdico, profundidade de campo suave, cores
neutras. Formato cadrado 600x600, alta calidade.
```

#### 3. Banner de servizos (1920×500)
```
Banner panorámico para sección de servizos dun estudio de
deseño dixital, estilo minimalista escandinavo, mostrando un
equipo de 2-3 persoas traballando nun espazo aberto con
vegetación. Iluminación natural lateral, paleta fría con
acentos verdes, ambiente tecnolóxico pero cálido.
Formato horizontal alongado 1920x500, preparado para web.
```

### Fase 2 · Iteracións

| Imaxe    | Iteración 1                                | Iteración 2                                          |
| -------- | ------------------------------------------ | ---------------------------------------------------- |
| Hero     | Composición centrada, paleta fría pura     | Regra dos terzos, engadir suxeito humano, máis cálida |
| Thumb    | Realista, fondo branco                     | Conceptual, abstracción xeométrica, máis gráfico     |
| Banner   | Bokeh forte, moito desenfoque              | Foco máis nítido, maior profundidade de campo        |

### Fase 3 · Adaptación a formato web

| Uso        | Dimensións   | Razón                                                                 |
| ---------- | ------------ | --------------------------------------------------------------------- |
| Hero       | 1920 × 900   | Ocupa case todo o viewport; panoramicidade para impacto visual.       |
| Thumbnail  | 600 × 600    | Cadrado para grid uniforme; tamaño lixeiro para previsualización.    |
| Banner     | 1920 × 500   | Moi apaisado, actúa como separador horizontal entre seccións.         |

Efectos sobre a composición:
- **Hero** → ao recortar a 16:9 aprox. podemos perder elementos laterais; priorizamos o suxeito principal no terzo central.
- **Thumbnail** → o formato cadrado obriga a centrar o detalle; eliminamos aire nos lados.
- **Banner** → o formato alongado favorece composicións horizontais con suxeitos aliñados.

### Fase 4 · Coherencia visual

Para asegurar coherencia entre as 3 imaxes:

- **Paleta común**: branco #FFFFFF, gris cálido #F6F5F1, verde salvia #2A4D4A, madeira clara.
- **Estilo fotográfico**: luz natural sempre desde a esquerda, profundidade de campo reducida.
- **Tipografía do entorno**: sans-serif moderna (Inter) nos títulos.
- **Composición**: regra dos terzos ou centrada, con moito espazo negativo.
- **Provedor de IA recomendado**: Midjourney (`--style raw --ar 16:9`) ou Adobe Firefly (integración con Photoshop para axustar paleta exacta).
