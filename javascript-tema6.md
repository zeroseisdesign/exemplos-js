

# Tema 6. Os eventos da linguaxe de guión

## Utilización de eventos

### Definición de eventos

Os eventos permiten executar código JavaScript cando o usuario realiza unha acción na páxina.

Por exemplo:

- Facer clic nun botón.
- Mover o rato.
- Escribir nun campo.
- Enviar un formulario.
- Redimensionar a xanela.

Os eventos son fundamentais para crear páxinas web interactivas.

---

### Accións asociadas aos eventos

Cada evento pode executar unha función.

Exemplo:

```html
<button id="btn">Premer</button>

<script>
let boton = document.getElementById("btn");

boton.addEventListener("click", mostrar);

function mostrar() {
  console.log("Fixeches clic");
}
</script>
```

Neste caso:

- O evento é `click`.
- A función executada é `mostrar()`.

---

### Xerarquía dos eventos desde o obxecto Window

Moitos eventos dependen da xerarquía do DOM.

A estrutura principal é:

| Obxecto | Función |
|---|---|
| `window` | Xanela do navegador |
| `document` | Documento HTML cargado |
| Elementos HTML | Botóns, formularios, textos, imaxes... |

Exemplo:

```javascript
window.addEventListener("load", iniciar);

function iniciar() {
  console.log("Páxina cargada");
}
```

---

# Eventos en elementos de formulario

Os formularios utilizan eventos para detectar cambios nos campos.

## onselect

Execútase cando o usuario selecciona texto nun campo.

```html
<input type="text" onselect="seleccionar()">

<script>
function seleccionar() {
  console.log("Texto seleccionado");
}
</script>
```

---

## onchange

Execútase cando cambia o valor dun campo.

```html
<select id="cidade">
  <option>A Coruña</option>
  <option>Vigo</option>
</select>

<script>
let cidade = document.getElementById("cidade");

cidade.addEventListener("change", cambiar);

function cambiar() {
  console.log(cidade.value);
}
</script>
```

`value` permite obter o valor do elemento.

---

# Eventos de rato

Permiten detectar accións realizadas co rato.

| Evento | Descrición |
|---|---|
| `mousedown` | Pulsar un botón do rato |
| `mousemove` | Mover o rato |
| `mouseout` | Saír dun elemento |
| `mouseover` | Entrar nun elemento |
| `mouseup` | Soltar un botón do rato |
| `click` | Facer clic |

---

## onmousedown

```javascript
elemento.addEventListener("mousedown", iniciar);
```

---

## onmousemove

```javascript
document.addEventListener("mousemove", mover);
```

Este evento úsase moito en xogos, animacións e efectos visuais.

---

## onmouseout

```javascript
elemento.addEventListener("mouseout", saír);
```

---

## onmouseover

```javascript
elemento.addEventListener("mouseover", entrar);
```

Moi utilizado para menús despregables e efectos hover.

---

## onmouseup

```javascript
elemento.addEventListener("mouseup", soltar);
```

---

# Eventos de teclado

Permiten detectar teclas pulsadas polo usuario.

| Evento | Descrición |
|---|---|
| `keydown` | Pulsar unha tecla |
| `keypress` | Manter unha tecla pulsada |
| `keyup` | Soltar unha tecla |

---

## onkeydown

```javascript
document.addEventListener("keydown", tecla);
```

---

## onkeypress

```javascript
document.addEventListener("keypress", escribir);
```

Actualmente úsase menos e adoita substituírse por `keydown`.

---

## onkeyup

```javascript
document.addEventListener("keyup", liberar);
```

Exemplo práctico:

```html
<input type="text" id="nome">

<script>
let campo = document.getElementById("nome");

campo.addEventListener("keyup", escribir);

function escribir() {
  console.log(campo.value);
}
</script>
```

Este sistema úsase para validación en tempo real.

---

# Eventos de enfoque

Relacionados co foco dos elementos.

## onblur

Execútase cando un elemento perde o foco.

```javascript
input.addEventListener("blur", validar);
```

Moi usado para validar formularios.

---

## onfocus

Execútase cando un elemento recibe o foco.

```javascript
input.addEventListener("focus", activar);
```

Exemplo:

```javascript
input.addEventListener("focus", function() {
  input.style.backgroundColor = "lightyellow";
});
```

---

# Eventos de formulario

## onreset

Execútase ao reiniciar un formulario.

```javascript
formulario.addEventListener("reset", limpar);
```

---

## onsubmit

Execútase ao enviar o formulario.

```javascript
formulario.addEventListener("submit", enviar);
```

Exemplo:

```javascript
function enviar(event) {
  event.preventDefault();
  console.log("Formulario enviado");
}
```

`preventDefault()` evita o envío automático do formulario.

---

# Eventos de xanela

Relacionados coa xanela do navegador.

| Evento | Descrición |
|---|---|
| `move` | Movemento da xanela |
| `resize` | Cambio de tamaño |
| `load` | Carga completa da páxina |
| `unload` | Saída da páxina |

---

## onmove

Actualmente ten pouco uso nos navegadores modernos.

---

## onresize

```javascript
window.addEventListener("resize", cambiarTamaño);
```

Moi utilizado en deseño responsive.

---

# Outros eventos

## onunload

Execútase ao abandonar a páxina.

```javascript
window.addEventListener("unload", saír);
```

---

## onload

Execútase cando a páxina termina de cargar.

```javascript
window.addEventListener("load", iniciar);
```

É un dos eventos máis utilizados.

---

## onclick

```javascript
boton.addEventListener("click", mostrar);
```

Permite executar accións ao facer clic.

---

## ondragdrop

Relacionado co sistema de arrastrar e soltar elementos.

```javascript
elemento.addEventListener("drop", soltar);
```

Moi usado en aplicacións modernas.

---

## onerror

Execútase cando ocorre un erro de carga.

```javascript
imaxe.addEventListener("error", erro);
```

---

## onabort

Execútase cando se interrompe unha carga.

```javascript
window.addEventListener("abort", cancelar);
```

---

# Boas prácticas actuais

## Uso de addEventListener()

Actualmente recoméndase utilizar `addEventListener()` en lugar dos atributos HTML como `onclick=""`.

Exemplo recomendado:

```javascript
boton.addEventListener("click", mostrar);
```

Vantaxes:

- Código máis organizado.
- Separación entre HTML e JavaScript.
- Permite engadir varios eventos ao mesmo elemento.
- Mellor mantemento do código.

---

## Manipulación habitual do DOM con eventos

| Propiedade ou método | Descrición |
|---|---|
| `textContent` | Cambia texto dun elemento |
| `innerHTML` | Insire HTML dentro dun elemento |
| `value` | Obtén o valor dun input |
| `classList.add()` | Engade unha clase CSS |
| `classList.remove()` | Elimina unha clase CSS |
| `classList.toggle()` | Activa ou desactiva unha clase |
| `style` | Modifica estilos CSS |

Exemplo:

```javascript
menu.classList.toggle("visible");
```

---

# Exercicio práctico

Crear unha pequena interacción para a web corporativa do proxecto:

## Obxectivos

- Crear un botón de menú móbil.
- Mostrar e ocultar a navegación.
- Cambiar unha clase CSS usando JavaScript.
- Utilizar eventos `click`.
- Utilizar `querySelector()` e `classList.toggle()`.

## Exemplo base

```html
<button id="btnMenu">Menú</button>

<ul class="nav-mobile">
  <li>Inicio</li>
  <li>Servizos</li>
  <li>Contacto</li>
 </ul>
```

```javascript
let boton = document.getElementById("btnMenu");

let menu = document.querySelector(".nav-mobile");

boton.addEventListener("click", mostrar);

function mostrar() {
  menu.classList.toggle("visible");
}
```

O alumnado pode engadir transicións CSS e efectos visuais para mellorar a experiencia de usuario.