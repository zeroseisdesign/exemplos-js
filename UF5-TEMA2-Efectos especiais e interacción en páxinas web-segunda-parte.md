# 2. Efectos especiais e interacción en páxinas web

## Outros efectos e animacións modernas con CSS

As animacións forman parte do deseño web actual. Utilízanse para mellorar a experiencia de usuario, guiar a atención e proporcionar feedback visual durante a interacción.

É importante empregar animacións con moderación. Un exceso de movemento pode distraer ao usuario e afectar ao rendemento da páxina.

---

### Transicións CSS

As transicións permiten realizar cambios suaves entre dous estados dun elemento.

Exemplo:

```css
button {
  background-color: steelblue;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: royalblue;
}
```

Propiedades habituais:
- duration
- delay
- timing-function
- property

---

### Animacións con `@keyframes`

Os keyframes permiten definir unha secuencia completa de animación.

Exemplo:

```css
@keyframes aparecer {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.elemento {
  animation: aparecer 1s ease;
}
```

Aplicacións habituais:
- Aparición de elementos.
- Mensaxes de aviso.
- Carga de contido.
- Hero sections.

---

### Transformacións CSS

As transformacións modifican a posición, tamaño ou orientación dun elemento.

Principais funcións:

```css
transform: translateX(50px);
transform: scale(1.2);
transform: rotate(10deg);
transform: skew(10deg);
```

Usos habituais:
- Efectos hover.
- Menús despregables.
- Tarxetas interactivas.

---

### Animacións de entrada e saída

Son as máis utilizadas nas interfaces modernas.

Exemplos:
- Fade In.
- Fade Out.
- Slide Up.
- Slide Down.
- Zoom In.
- Zoom Out.

Estas animacións permiten introducir elementos de forma progresiva sen resultar intrusivas.

---

### Animacións ao facer scroll

Actualmente é habitual mostrar elementos a medida que o usuario avanza pola páxina.

Exemplos:
- Aparición gradual.
- Desprazamento lateral.
- Efecto zoom.
- Efecto parallax.

Moitas destas animacións poden implementarse mediante JavaScript e Intersection Observer ou mediante librerías especializadas.

---

### Bibliotecas de animación

Existen bibliotecas que simplifican a creación de efectos profesionais.

#### Animate.css

Biblioteca baseada en clases CSS predefinidas.

Exemplo:

```html
<h2 class="animate__animated animate__fadeInUp">
  Título animado
</h2>
```

---

#### AOS (Animate On Scroll)

Especializada en animacións durante o desprazamento da páxina.

Exemplo:

```html
<div data-aos="fade-up">
  Contido animado
</div>
```

---

#### GSAP

Unha das bibliotecas profesionais máis utilizadas para animación web.

Permite:
- Animacións complexas.
- Timelines.
- Control avanzado do movemento.
- Integración con SVG.

---

### Efectos con capas

As capas permiten superpoñer elementos visuais para crear composicións máis ricas.

Técnicas habituais:
- Overlays escuros sobre fotografías.
- Texto sobre imaxes.
- Degradados superpostos.
- Elementos flotantes.

Exemplo:

```css
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.4);
}
```

---

### Boas prácticas en animación web

- Animar só elementos importantes.
- Utilizar transicións curtas (200-400 ms).
- Priorizar propiedades eficientes como `transform` e `opacity`.
- Evitar animar ancho, alto ou posición cando sexa posible.
- Comprobar o comportamento en móbiles.
- Respectar usuarios con sensibilidade ao movemento mediante `prefers-reduced-motion`.

As animacións deben mellorar a experiencia de usuario e non converterse nun elemento de distracción.