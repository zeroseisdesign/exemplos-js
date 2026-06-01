# 2. Efectos especiais e interacción en páxinas web

## 2.1. Traballo con imaxes e recursos multimedia

As imaxes e os recursos multimedia son elementos fundamentais no deseño web moderno. Axudan a comunicar información, melloran a experiencia de usuario e fan a páxina máis atractiva visualmente.

Un uso incorrecto das imaxes pode provocar:
- Páxinas lentas.
- Mala experiencia en móbiles.
- Consumo excesivo de datos.
- Problemas de accesibilidade.

Por este motivo, é importante coñecer os formatos actuais, optimizar os recursos e aplicar boas prácticas de integración.

### Selección e uso eficiente de imaxes web

Antes de incorporar unha imaxe nunha páxina web débese valorar:
- A finalidade da imaxe.
- O tamaño necesario.
- O dispositivo no que se visualizará.
- A velocidade de carga.
- A calidade visual.

Non todas as imaxes deben utilizar o mesmo formato.

### Redución de peso

As cámaras actuais e os teléfonos móbiles xeran fotografías moi grandes.

Por exemplo:
- Unha fotografía dun móbil pode superar os 4000px de ancho.
- Nunha páxina web, normalmente non é necesario máis de 1200px ou 1600px.

Reducir o tamaño real da imaxe permite diminuír drasticamente o peso do arquivo.

### Axuste da resolución

A resolución debe adaptarse ao espazo real que ocupará a imaxe na interface.

Exemplo:
- Se unha imaxe vai mostrarse nunha tarxeta de 400px de ancho, non ten sentido usar unha imaxe de 5000px.

Isto mellora:
- A velocidade de carga.
- O rendemento da páxina.
- O consumo de memoria do navegador.

### Compresión de imaxes

A compresión reduce o tamaño do arquivo.

Existen dous tipos:

#### Compresión con perda

Reduce máis o peso sacrificando algo de calidade.

Usos habituais:
- Fotografías.
- Banners.
- Imaxes decorativas.

Formatos habituais:
- JPG
- WebP
- AVIF

---

#### Compresión sen perda

Mantén a calidade orixinal.

Usos habituais:
- Logos.
- Iconas.
- Gráficos.
- Capturas.

Formatos habituais:
- PNG
- SVG

### Ferramentas de optimización

Os programas de edición gráfica permiten exportar imaxes optimizadas para web.

#### Adobe Photoshop

Photoshop permite:
- Redimensionar imaxes.
- Exportar en JPG, PNG ou WebP.
- Axustar a compresión.
- Previsualizar o peso final.

#### Adobe Illustrator

Illustrator úsase especialmente para:
- Logos.
- Iconas.
- Gráficos vectoriais.
- Exportación SVG.

Os SVG xerados poden empregarse directamente na web.

#### GIMP

GIMP é unha alternativa gratuíta a Photoshop.

Permite:
- Optimizar fotografías.
- Exportar JPG e PNG.
- Reducir peso.
- Axustar resolución.

#### Inkscape

Inkscape é unha alternativa libre a Illustrator.

Está orientado ao deseño vectorial e exportación SVG.

Moi útil para:
- Logos.
- Iconas.
- Interfaces.

### Optimización desde Figma

Figma tamén permite exportar recursos gráficos.

Na versión gratuíta:
- Pode exportar PNG, JPG e SVG.
- A optimización é máis básica.

Nas versións de pago:
- Existen máis opcións de exportación.
- Mellor control de recursos.
- Automatización mediante librerías e compoñentes.

Tamén existen plugins específicos para optimización.

Exemplos habituais:
- TinyImage Compressor.
- Image Tracer.
- SVG Export.

Estes plugins permiten:
- Comprimir imaxes.
- Xerar WebP.
- Optimizar SVG.
- Reducir peso automaticamente.

---

### Formatos modernos

#### JPG

O formato JPG úsase principalmente para fotografías.

Características:
- Boa compresión.
- Reduce bastante o peso.
- Perde algo de calidade ao comprimirse.
- Non permite transparencias.

Uso habitual:
- Fotografías.
- Imaxes realistas.
- Banners.

Exemplo:

```html
<img src="imaxes/paisaxe.jpg" alt="Paisaxe natural">
```

#### PNG

O formato PNG permite transparencias e mantén alta calidade.

Características:
- Non perde calidade.
- Compatible con transparencias.
- Arquivos máis pesados.

Uso habitual:
- Logos.
- Iconas.
- Capturas de pantalla.

#### SVG

SVG é un formato vectorial baseado en XML.

Características:
- Non perde calidade ao ampliar.
- Moi lixeiro.
- Editable mediante CSS e JavaScript.
- Ideal para deseño responsive.

Uso habitual:
- Logos.
- Iconas.
- Ilustracións simples.

Exemplo:

```html
<img src="imaxes/logo.svg" alt="Logo da empresa">
```

#### WebP

WebP é un formato moderno desenvolvido por Google.

Características:
- Excelente compresión.
- Menor peso que JPG e PNG.
- Permite transparencias.
- Moi utilizado actualmente.

Uso habitual:
- Imaxes web optimizadas.
- Fotografía e gráficos.

#### AVIF

AVIF é un formato máis recente e eficiente.

Características:
- Máis compresión.
- Alta calidade visual.
- Moi reducido en tamaño.
- Compatibilidade moderna.

Uso habitual:
- Proxectos optimizados.
- Páxinas centradas en rendemento.

---

### Imaxes responsive en HTML

As imaxes responsive adáptanse automaticamente ao dispositivo.

#### Carga adaptativa segundo dispositivo

As páxinas web modernas poden servir distintas versións dunha mesma imaxe segundo:
- Tamaño do viewport (móbil, tablet, escritorio),
- Densidade de píxeles (pantallas retina),
-E condicións de rede.

O obxectivo é claro: evitar descargar máis peso do necesario sen perder calidade visual.

#### `srcset` e `sizes` (adaptación por ancho e resolución) 

A propiedade `srcset` permite ofrecer varias versións da mesma imaxe. O navegador escolle automaticamente a máis adecuada.

Hai dous usos principais:

- Baseado en ancho (w descriptor)

Indica o ancho real da imaxe en píxeles:

```html
<img
  src="imaxe-480.jpg"
  srcset="
    imaxe-480.jpg 480w,
    imaxe-800.jpg 800w,
    imaxe-1200.jpg 1200w"
  sizes="(max-width: 600px) 480px,
         (max-width: 1000px) 800px, 1200px"
  alt="Exemplo responsive">
```

O navegador selecciona automaticamente a imaxe máis adecuada.

- Baseado en densidade de píxeles (x descriptor)

Úsase cando non interesa o tamaño do layout, senón pantallas retina:

```html
<img
  src="imaxe.jpg"
  srcset="
    imaxe.jpg 1x,
    imaxe@2x.jpg 2x,
    imaxe@3x.jpg 3x"
  alt="Exemplo retina">
```

Como funciona:

* 1x → pantallas estándar
* 2x → pantallas retina (doble densidade)
* 3x → alta densidade

👉 Úsase moito en iconos e UI.

#### Uso da etiqueta `picture`

A etiqueta `picture` permite definir distintos formatos ou tamaños.

Exemplo:

```html
<picture>
    <source srcset="imaxe.avif" type="image/avif">
    <source srcset="imaxe.webp" type="image/webp">
    <img src="imaxe.jpg" alt="Imaxe adaptable">
</picture>
```
Como decide o navegador:

1. Mira o tamaño do espazo dispoñible (definido en sizes).
2. Calcula que imaxe é suficiente para ese espazo.
3. Descarga a máis próxima pero sen quedarse curta.

👉 Isto é o máis importante en responsive moderno.



---

### Lazy loading

O lazy loading consiste en cargar as imaxes só cando van aparecer na pantalla.

Vantaxes:
- Menor carga inicial.
- Mellor rendemento.
- Aforro de datos.

Exemplo:

```html
<img src="foto.jpg" loading="lazy" alt="Fotografía">
```

---

### Iconografía web

As iconas utilízanse para mellorar a comunicación visual.

### SVG inline

Un SVG pode inserirse directamente no HTML.

Exemplo:

```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="blue"></circle>
</svg>
```

Vantaxes:
- Editable con CSS.
- Editable con JavaScript.
- Non perde calidade.

---

### Bibliotecas de iconas

Existen bibliotecas xa preparadas:
- Font Awesome.
- Bootstrap Icons.
- Material Symbols.

Exemplo:

```html
<i class="fa-solid fa-house"></i>
```

---

### Bancos de imaxes e recursos visuais

Para o traballo profesional en deseño web é habitual empregar bancos de imaxes xa optimizadas ou de uso libre. Permiten acelerar o fluxo de traballo e garantir calidade visual.

#### Bancos máis usados

- Unsplash → Fotografías de alta calidade e uso libre.
- Pexels → Imaxes e vídeos gratuítos para uso comercial.
- Pixabay → Fotos, ilustracións e vídeos libres de dereitos.
- Freepik → Recursos gráficos, vectores e imaxes (modelo freemium).
- Adobe Stock → Banco profesional de pago con integración en Adobe.
- Shutterstock → Gran catálogo profesional de imaxes e vídeo.

#### Boas prácticas de uso

- Comprobar sempre a licenza de uso.
- Evitar imaxes excesivamente xenéricas.
- Optimizar sempre antes de subir á web.
- Manter coherencia visual entre recursos.

---

CSS para adaptar e mellorar imaxes

## Efectos visuais con CSS

CSS permite crear efectos visuais modernos sen necesidade de programas externos.


### `hover`

O pseudoestado `hover` actívase ao pasar o rato.

Exemplo:

```css
img:hover {
    transform: scale(1.05);
}
```

### Transicións (suavidade do efecto)

Para evitar cambios bruscos:

```css
img {
  transition: transform 0.3s ease;
}
```

### Filtros

Os filtros permiten modificar a aparencia visual.

Exemplo:

```css
img {
    filter: grayscale(100%);
}
```

Filtros habituais:
* blur → filter: blur(2px | 5px | 10px);
    (leve → medio → forte desenfoque)
* brightness → filter: brightness(80% | 120% | 150%);
    (escuro → normal → máis luminoso)
* contrast → filter: contrast(90% | 120% | 160%);
    (suave → normal → moi marcado)
* grayscale → filter: grayscale(30% | 70% | 100%);
    (parcial → alto → branco e negro total)
* sepia → filter: sepia(30% | 60% | 100%);
    (lixeiro vintage → marcado → efecto antigo completo)

### Máscaras

As máscaras permiten ocultar partes dunha imaxe.

Úsanse para efectos decorativos avanzados.

```css
img {
  mask-image: linear-gradient(to right, black, transparent);
}
```

### `blend modes`

Os modos de fusión combinan capas e cores.

Exemplo:

```css
mix-blend-mode: multiply;
```

### Zoom

O efecto zoom amplía elementos visualmente.

Exemplo:

```css
img:hover {
    transform: scale(1.1);
    transition: 0.3s;
}
```

### Exemplo combinado hover (galería profesional)
```css
.gallery img {
  filter: grayscale(100%) contrast(90%);
  transform: scale(1);
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
}

.gallery img:hover {
  filter: grayscale(0%) contrast(110%) brightness(105%);
  transform: scale(1.05);
}
```

---

### Parallax básico

O efecto parallax crea sensación de profundidade.

Exemplo:

```css
.parallax {
    background-attachment: fixed;
}
```

---

## Presentación das imaxes en interface

A presentación das imaxes nunha interface web non é só unha cuestión estética, senón unha decisión de deseño centrada na experiencia de usuario, a jerarquía visual e a conversión.

Existen patróns moi habituais en web moderna onde a imaxe é o elemento principal de comunicación.

---

### Hero sections (imaxe principal de impacto)

O *hero* é a zona superior dunha páxina, normalmente na portada, onde unha imaxe ocupa un papel protagonista.

Características:
- Ocupa gran parte do viewport (pantalla inicial).
- Suele incluír texto superposto.
- Pode incorporar vídeo de fondo.
- Está orientado a impacto visual inmediato.

Uso típico:
- Portadas de webs corporativas.
- Landing pages.
- E-commerce (campañas destacadas).

Exemplo conceptual:
- Imaxe de fondo + titular + CTA

---

### Galerías de imaxes (image galleries)

As galerías permiten mostrar conxuntos de imaxes organizadas.

Características:
- Disposición en grid.
- Navegación visual rápida.
- Moito uso en portfolios e fotografía.

Elementos habituais:
- Grid de miniaturas (*thumbnails*).
- Lightbox ao facer clic.
- Filtros por categorías.

---

### Thumbnails (miniaturas)

As *thumbnails* son versións reducidas das imaxes principais.

Funcións:
- Previsualización rápida.
- Reducir carga inicial.
- Servir como navegación visual.

Uso típico:
- Galerías.
- Vídeos (YouTube style).
- Produtos en e-commerce.

---

### Carruseis de imaxes (carousels)

Un carrusel permite mostrar varias imaxes nun mesmo espazo rotando automaticamente ou mediante interacción.

Características:
- Rotación horizontal.
- Navegación con frechas ou indicadores.
- Pode ser automático ou manual.

Uso típico:
- Portadas dinámicas.
- Produtos destacados.
- Testimonios visuais.

---

### Sliders automáticos e manuais

Os sliders son variantes dos carruseis con control máis narrativo.

Tipos:x
- Automáticos: cambian sen interacción.
- Manuais: controlados polo usuario.
- Mixtos: combinan ambos comportamentos.

Elementos habituais:
- Frechas de navegación.
- Dots de posición.
- Pausa/Play.

---

### Integración multimedia

As interfaces modernas combinan distintos medios para enriquecer a experiencia visual.

Recursos habituais:
- Imaxes.
- Vídeo.
- Audio.
- Animacións CSS ou Lottie.
- Iconografía SVG.

Obxectivo:
- Mellorar a comunicación visual.
- Aumentar o tempo de permanencia.
- Guiar a atención do usuario.

Exemplo típico de hero multimedia:

```html
<section class="hero">
    <video autoplay muted loop playsinline>
        <source src="video.mp4" type="video/mp4">
    </video>

    <div class="hero-content">
        <h1>Título principal</h1>
        <p>Mensaxe de valor</p>
    </div>
</section>
```
---

## Anexo: Xeración de imaxes con intelixencia artificial

A xeración de imaxes con IA converteuse nunha ferramenta habitual no deseño web, especialmente para prototipos, ilustracións e creatividades rápidas.

### Ferramentas máis usadas

- Midjourney → Alta calidade artística, moi usada en creatividade e concept art.
- DALL·E → Integrada en ecosistemas de IA, moi útil para imaxes xerais e ilustracións.
- Stable Diffusion → Open source, altamente personalizable.
- Adobe Firefly → Integración directa con Photoshop e Illustrator.
- Leonardo AI → Enfoque en assets para xogos, UI e creatividades comerciais.

### Uso habitual en web

- Imaxes de hero section.
- Ilustracións conceptuais.
- Mockups rápidos.
- Propostas visuais para clientes.

### Estrutura básica dun prompt

Un bo prompt debe incluír:

- Tipo de imaxe
- Estilo visual
- Obxecto principal
- Contexto
- Iluminación / atmosfera
- Formato ou enquadre

### Exemplo de prompt (plantilla)

```
[Tipo de imaxe], estilo [estilo visual], mostrando [obxecto principal] en [contexto].
Iluminación [descrición], ambiente [descrición], alta calidade, detalle profesional, formato web.
```

### Exemplo completo

```
Hero image para web corporativa, estilo minimalista moderno, mostrando un equipo de traballo en oficina luminosa.
Iluminación natural suave, ambiente profesional e limpo, profundidade de campo reducida, formato horizontal.
```

---

# Exercicio: Optimización e presentación de imaxes nunha web

## Obxectivo

Aplicar técnicas de optimización de imaxes e construír unha interface sinxela con elementos visuais modernos:

- hero
- galería
- thumbnails
- carrusel
- imaxe responsive

---

## Contexto

Unha empresa ficticia necesita unha páxina web para mostrar un portfolio de proxectos.

A páxina debe ser visual, rápida e adaptable a móbiles.

---

## Parte 1: Optimización de imaxes

Tes as seguintes imaxes orixinais:

- imaxe1.jpg (4000px)
- imaxe2.jpg (3500px)
- imaxe3.jpg (5000px)
- logo.png (2000px transparente)

### Tarefas

1. Reduce o tamaño das imaxes a:
   - Hero: 1600px máximo
   - Galería: 800px máximo
   - Thumbnails: 300px máximo

2. Exporta en formatos adecuados:
   - Fotografías → JPG / WebP
   - Logo → PNG / SVG se é posible

3. Xustifica:
   - Por que non usar as imaxes orixinais?
   - Que formato escolles en cada caso?

---

## Parte 2: Responsive con `srcset`

Crea unha imaxe responsive para a galería.

Debes incluír:
- versión 300w
- versión 800w
- versión 1200w

Requisitos:
- o navegador debe escoller automaticamente a versión correcta
- debe manter boa calidade en retina (2x)

---

## Parte 3: Estrutura visual da páxina
Constrúe unha estrutura HTML con:

### 1. Hero principal
- Imaxe de fondo ou vídeo
- Título
- Botón de acción

---

### 2. Galería de imaxes
- Grid de 6 imaxes
- Uso de thumbnails

---

### 3. Carrusel de imaxes destacado
- mínimo 3 imaxes
- navegación manual ou automática (conceptual ou básica)

---

## Parte 4: Efectos visuais con CSS

Aplica efectos:

### Obrigatorios:
- hover con zoom suave
- transición fluída
- filtro inicial en escala de grises

### Exemplo mínimo esperado:

```css

img {
  filter: grayscale(100%);
  transition: all 0.3s ease;

}

img:hover {
  filter: grayscale(0%);
  transform: scale(1.05);
}
```

## Exercicio práctico: creación de imaxes con IA para web

### Obxectivo

Aprender a xerar imaxes coherentes para interfaces web (hero, thumbnails e banners) utilizando ferramentas de IA, controlando estilo, composición e consistencia visual.


#### Fase preliminar. Contexto do proxecto

Imaxina que estás a deseñar a web dun estudo creativo chamado “Nordic Studio”, especializado en deseño dixital minimalista.

Necesítanse 3 tipos de imaxes:

* Hero principal para a portada
* Thumbnails para unha galería de proxectos
* Banner para sección de servizos


#### Fase 1: creación de prompts base

Crea 3 prompts diferentes (un por tipo de imaxe).

Requisitos comúns:

* Estilo: minimalista escandinavo
* Luz natural suave
* Estética coherente entre todas as imaxes
* Fondo limpo ou arquitectónico
* Sensación profesional e tecnolóxica

Estrutura recomendada de prompt:

* Sujeto principal
* Entorno
* Estilo visual
* Iluminación
* Nivel de detalle
* Uso final (web/branding)


#### Fase 2: iteración e mellora

A partir dos primeiros resultados:

Debes facer mínimo 2 iteracións por imaxe, modificando:

* Composición (centrado / regra dos terzos)
* Paleta de cor (fría, cálida, neutra)
* Nivel de abstracción (realista vs conceptual)
* Profundidade de campo (bokeh, foco suave, etc.)
* Formato (horizontal, cuadrado, panorámico)

#### Fase 3: adaptación a formato web

Adapta cada imaxe a un uso real:

* Hero → 1920x900 aprox.
* Thumbnail → 600x600 aprox.
* Banner → 1920x500 aprox.

Indica en cada caso:

* Por que ese formato é o axeitado
* Como afecta á composición
* Que partes da imaxe se sacrifican ou priorizan

#### Fase 4: coherencia visual

Debes asegurar que as 3 imaxes:

* Parecen parte da mesma marca
* Comparten estilo fotográfico ou ilustrativo
* Teñen coherencia cromática
* Funcionan xuntas nunha mesma web

Se non o fan, deberás reescribir os prompts.