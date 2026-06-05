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

---

## Exercicio práctico: Animacións CSS activadas con JavaScript

### Obxectivo

Aplicar transicións e animacións CSS combinadas con eventos de JavaScript para crear interaccións reais nunha interface web.

⸻

### Enunciado

Desenvolve unha pequena páxina web cunha sección de “tarxetas de servizos” (mínimo 3 tarxetas).

Cada tarxeta debe incluír:

* Título
* Breve descrición
* Botón de acción

⸻

### Requisitos técnicos

### 1. Estrutura HTML

* Crear unha estrutura con 3 tarxetas.
* Cada tarxeta debe ter unha clase común (.card).

⸻

#### 2. Estilos CSS base

* Aplicar deseño con Flexbox ou Grid.
* Definir estilo inicial das tarxetas:
    * fondo branco
    * sombra suave
    * bordes redondeados
    * transición suave

⸻

#### 3. Animación CSS

Define unha animación con @keyframes chamada aparecerCard:

* Opacidade: 0 → 1
* Transformación: translateY(20px → 0)

A animación debe aplicarse cando a tarxeta sexa “activada”.

⸻

#### 4. Interacción con JavaScript

Implementa un comportamento onde:

* Ao facer clic nun botón “Ver máis”:
    * a tarxeta correspondente recibe unha clase .active
    * esa clase activa:
        * dispara a animación CSS
        * amplía lixeiramente a tarxeta (scale 1.05)
        * cambia o fondo ou borde para destacala

Exemplo de lóxica:

* evento click
* uso de classList.add() ou toggle()

⸻

#### 5. Requisito de animación combinada

* Debe existir:
    * unha transición CSS (hover ou estado normal → activo)
    * unha animación @keyframes (entrada da tarxeta)
    * un cambio de estado controlado por JS

⸻

### Melloras opcionais (nivel avanzado)

* Aplicar Intersection Observer para activar animacións ao facer scroll.
* Engadir botón de “pechar” que elimine a clase .active.
* Usar prefers-reduced-motion para desactivar animacións.
* Engadir retraso escalonado (stagger effect) nas tarxetas.

⸻

### Criterios de avaliación asociados

* Correcto uso de CSS animations e transitions.
* Manipulación do DOM con JavaScript.
* Activación de clases mediante eventos.
* Coherencia visual da interacción.
* Usabilidade e feedback visual adecuado.
* Rendemento básico das animacións.