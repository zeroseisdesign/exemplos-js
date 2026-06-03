

# Exercicio 8 – Landing page interactiva con Bootstrap

## Obxectivo

Crear unha landing page moderna e responsive utilizando:

- HTML5
- CSS3
- Bootstrap 5
- JavaScript

O exercicio combinará contidos vistos durante o curso:

- Estrutura HTML semántica
- Estilos CSS
- Componentes Bootstrap
- Manipulación do DOM
- Eventos JavaScript
- Validación e interaccións dinámicas

---

# Enunciado

A empresa ficticia **TimeX** quere lanzar unha nova páxina promocional para o seu reloxo intelixente:

## Produto

### TimeX One

Reloxo intelixente deportivo con:

- Pantalla AMOLED
- GPS integrado
- Monitorización cardíaca
- Resistencia á auga
- Batería de longa duración

O obxectivo da páxina é presentar o produto e permitir que os usuarios soliciten máis información.

---

# Requisitos obrigatorios

## 1. Estrutura da páxina

A páxina debe incluír:

- Header con logotipo e menú
- Hero section principal
- Sección de características
- Galería de imaxes
- Sección de pestanas (tabs)
- Formulario de contacto
- Footer

---

# 2. Menú hamburguesa

Crear un menú responsive utilizando Bootstrap.

O menú debe incluír:

- Inicio
- Características
- Galería
- Información técnica
- Contacto

## Requisitos JavaScript

Ao facer clic no botón hamburguesa:

- O menú debe abrirse e pecharse
- O icono debe cambiar visualmente usando clases CSS

Pódese utilizar:

- classList.add()
- classList.remove()
- classList.toggle()

---

# 3. Hero section

Debe incluír:

- Un título principal
- Un subtítulo
- Un botón “Comprar agora”
- Un botón “Máis información”
- Unha imaxe grande do reloxo

## Textos

### Título

TimeX One

### Subtítulo

O reloxo intelixente deseñado para o teu ritmo de vida.

---

# 4. Sección de características

Crear unha sección con 4 características do produto.

Cada característica debe ter:

- Icona Bootstrap Icons
- Título
- Pequena descrición

## Características

### GPS integrado

Controla as túas rutas en tempo real.

### Monitor cardíaco

Consulta a túa actividade física durante todo o día.

### Resistente á auga

Preparado para deporte e actividades exteriores.

### Batería avanzada

Ata 7 días de autonomía.

---

# 5. Galería de imaxes

Crear unha galería responsive con Bootstrap Grid.

## Requisitos

- Mínimo 6 imaxes
- As imaxes deben organizarse en columnas responsive
- Ao pasar o rato sobre unha imaxe:
  - A imaxe debe ampliar lixeiramente
  - Debe aplicarse unha transición suave

## JavaScript

Ao facer clic nunha imaxe:

- Mostrar unha mensaxe en consola indicando:

```javascript
console.log("Imaxe seleccionada");
```

---

# 6. Pestanas con contido

Crear unha sección con tabs de Bootstrap.

## Pestanas obrigatorias

- Deseño
- Saúde
- Deportes

## Contido

### Deseño

TimeX One combina elegancia e tecnoloxía moderna.

### Saúde

Monitorización cardíaca e control do sono.

### Deportes

Seguimento de actividades deportivas e rutas GPS.

## JavaScript

Detectar mediante eventos cando cambia a pestana activa.

Mostrar en consola:

```javascript
console.log("Pestana activa");
```

---

# 7. Formulario de contacto

Crear un formulario Bootstrap con validación JavaScript.

## Campos obrigatorios

| Campo | Tipo |
|---|---|
| Nome completo | text |
| Correo electrónico | email |
| Teléfono | tel |
| Mensaxe | textarea |
| Aceptación de condicións | checkbox |

---

# 8. Validación do formulario

## Requisitos

Todos os campos deben validarse con JavaScript.

### Mensaxes de erro

| Campo | Mensaxe |
|---|---|
| Nome | Introduce o teu nome |
| Email | Introduce un correo válido |
| Teléfono | Introduce un teléfono válido |
| Mensaxe | Escribe unha mensaxe |
| Checkbox | Debes aceptar as condicións |

---

# 9. Eventos JavaScript obrigatorios

O proxecto debe utilizar:

| Evento | Uso |
|---|---|
| click | Botóns e galería |
| submit | Validación do formulario |
| mouseover | Efecto nas imaxes |
| mouseout | Restaurar efecto |
| scroll | Mostrar cambios na navegación |
| load | Executar código ao cargar |

---

# 10. Footer

O footer debe incluír:

- Nome da empresa
- Redes sociais
- Texto de copyright

---

# Requisitos técnicos

## HTML

- Estrutura semántica
- Uso correcto de etiquetas
- Formularios accesibles

## CSS

- Uso de clases propias
- Responsive design
- Transicións suaves
- Personalización visual de Bootstrap

## JavaScript

- Uso de funcións
- Uso de eventos
- Manipulación do DOM
- Uso de classList
- Uso de querySelector() e getElementById()

---

# Organización recomendada

## Arquivos

```text
/index.html
/css/styles.css
/js/script.js
/img/
```

---

# Recursos recomendados

## Bootstrap

https://getbootstrap.com/

## Bootstrap Icons

https://icons.getbootstrap.com/

## MDN Web Docs

https://developer.mozilla.org/es/

---

# Ampliación opcional

Se rematas antes:

- Engadir modo escuro
- Crear un carrusel automático
- Engadir animacións ao facer scroll
- Crear un contador dinámico
- Mostrar unha alerta personalizada ao enviar o formulario

---

# Criterios de avaliación

| Criterio | Puntuación |
|---|---|
| Estrutura HTML correcta | 2 puntos |
| Deseño responsive | 2 puntos |
| Uso de Bootstrap | 2 puntos |
| Funcionalidade JavaScript | 2 puntos |
| Validación do formulario | 1 punto |
| Organización e limpeza do código | 1 punto |