UF1306 – MÓDULO 2  
UF2: Probas de funcionalidades e optimización de páxinas web (90 horas)
# TEMA 1 – VALIDACIÓN DE DATOS EN PÁXINAS WEB

## 1. Validacións de datos en páginas web

### Introducción

As validacións de datos son un proceso fundamental no desenvolvemento web actual. Permiten comprobar que a información introducida polos usuarios nun formulario é correcta, segura e cumpre determinados requisitos antes de ser enviada ao servidor.

Na actualidade, as validacións realízanse principalmente mediante:
- HTML5
- JavaScript
- Expresións regulares
- APIs modernas do navegador

As validacións melloran:
- A experiencia de usuario
- A seguridade da aplicación
- A integridade dos datos
- O rendemento do servidor

---

# Funcións de validación

## Descrición das funcións

As funcións de validación son bloques de código encargados de comprobar se os datos introducidos polos usuarios son válidos.

Poden:

- Verificar formatos
- Comprobar campos obrigatorios
- Validar números
- Validar datas
- Validar correos electrónicos
- Detectar caracteres non permitidos

Exemplo básico en JavaScript:

```javascript
function validarNome(nome) {
    return nome.length >= 3;
}
```

---

## Utilidade das funcións

As funcións de validación permiten:

- Evitar envío de formularios incorrectos
- Reducir erros de introdución
- Mellorar a usabilidade
- Evitar ataques básicos
- Guiar ao usuario en tempo real

Exemplo práctico:

```javascript
if (!validarNome(nome)) {
    alert("O nome debe ter polo menos 3 caracteres");
}
```

---

## Implementación das funcións

Actualmente as validacións adoitan combinar:

- Validación HTML5
- JavaScript no cliente
- Validación no servidor

Exemplo combinando HTML5 e JavaScript:

```html
<input type="email" id="correo" required>

<script>
const correo = document.getElementById("correo");

correo.addEventListener("input", function() {

    if (correo.validity.typeMismatch) {

        correo.setCustomValidity("Introduce un email válido");

    } else {

        correo.setCustomValidity("");

    }

});
</script>
```

Neste curso empregarase principalmente a sintaxe clásica de JavaScript:

- `var`
- `function()`
- funcións nomeadas

A sintaxe moderna con funcións frecha (`=>`), `const` e `let` mencionarase máis adiante para facilitar a lectura de código actual, pero os exemplos principais adaptaranse ao nivel inicial do alumnado.

---

# Validacións alfabéticas, numéricas e de data

## Validacións alfabéticas

Permiten aceptar só letras.

Exemplo:

```javascript
function validarTexto(texto) {
    return /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(texto);
}
```

Exemplo HTML5:

```html
<input 
    type="text"
    pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ ]+"
    required
>
```

---

## Validacións numéricas

Permiten aceptar só números.

Exemplo:

```javascript
function validarNumero(numero) {
    return !isNaN(numero);
}
```

Exemplo moderno con HTML5:

```html
<input 
    type="number"
    min="1"
    max="100"
>
```

---

## Validacións de datas

Permiten comprobar datas válidas.

Exemplo:

```javascript
function validarData(data) {
    return !isNaN(Date.parse(data));
}
```

Exemplo HTML5:

```html
<input type="date">
```

Restrinxir datas:

```html
<input 
    type="date"
    min="2025-01-01"
    max="2025-12-31"
>
```

---

# Definición de validacións

Unha validación define:

- O tipo de dato esperado
- As restricións
- O comportamento ante erros

Tipos frecuentes:

| Validación | Exemplo |
|---|---|
| Obrigatorio | required |
| Lonxitude mínima | minlength |
| Lonxitude máxima | maxlength |
| Patrón | pattern |
| Número mínimo | min |
| Número máximo | max |

Exemplo:

```html
<input
    type="password"
    minlength="8"
    required
>
```

---

# Código de validación

## Uso de JavaScript

Exemplo completo:

```html
<form id="formulario">

    <input type="text" id="nome" required>

    <button type="submit">
        Enviar
    </button>

</form>

<script>

var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    var nome = document.getElementById("nome").value;

    if (nome.length < 3) {

        evento.preventDefault();

        alert("O nome debe ter mínimo 3 caracteres");

    }

});

</script>
```

### Explicación do código

| Elemento | Función |
|---|---|
| `getElementById()` | Localiza un elemento HTML |
| `addEventListener()` | Executa código cando ocorre un evento |
| `submit` | Evento de envío do formulario |
| `preventDefault()` | Evita o envío se hai erros |
| `alert()` | Mostra unha mensaxe ao usuario |

---

# Execución do código de validación

As validacións poden executarse:

- Mentres o usuario escribe
- Ao perder o foco
- Ao enviar o formulario

Eventos máis usados:

| Evento | Uso |
|---|---|
| input | Mentres escribe |
| change | Cambio de valor |
| blur | Perde foco |
| submit | Envío do formulario |

Exemplo:

```javascript
var campo = document.getElementById("nome");

campo.addEventListener("input", function() {

    console.log("O usuario está escribindo");

});
```

---

# Verificar formularios

## Identificación de datos

Antes de validar é necesario identificar os campos.

Métodos modernos:

```javascript
document.getElementById();
document.querySelector();
document.querySelectorAll();
```

Exemplo:

```javascript
var email = document.querySelector("#email");
```

---

## Implementación do código de verificación

Exemplo completo actual:

```html
<form id="registro">

    <label for="usuario">
        Usuario
    </label>

    <input 
        type="text"
        id="usuario"
        required
        minlength="4"
    >

    <label for="email">
        Email
    </label>

    <input 
        type="email"
        id="email"
        required
    >

    <button type="submit">
        Rexistrarse
    </button>

</form>

<script>

var formulario = document.getElementById("registro");

formulario.addEventListener("submit", function(evento) {

    var usuario = document.getElementById("usuario");

    if (usuario.value.length < 4) {

        evento.preventDefault();

        alert("O usuario debe ter mínimo 4 caracteres");

    }

});

</script>
```

---

## Comprobación dos datos introducidos polo usuario

Actualmente recoméndase:

- Validación inmediata
- Mensaxes claras
- Feedback visual
- Accesibilidade

A validación visual debe ser simple e clara. Non se recomenda abusar de animacións nin efectos complexos.

Exemplo CSS moderno:

```css
input:valid {
    border: 2px solid green;
}

input:invalid {
    border: 2px solid red;
}
```

Exemplo con pseudoclases:

```css
input:focus:invalid {
    background-color: #ffe5e5;
}
```

---

# Boas prácticas actuais

## Validar sempre no servidor

A validación no cliente pode ser manipulada.

Por iso:

- HTML5 mellora UX
- JavaScript mellora interacción
- O servidor garante seguridade

---

## Usar HTML5 sempre que sexa posible

HTML5 simplifica moitas validacións:

```html
<input type="email" required>
```

---

## Evitar mensaxes pouco claras

Incorrecto:

```javascript
alert("Erro");
```

Correcto:

```javascript
alert("O email non ten un formato válido");
```

---

## Usar expresións regulares con moderación

As regex poden complicarse rapidamente.

Exemplo equilibrado:

```javascript
/^[A-Za-z ]+$/
```

---

# Erros habituais do alumnado

## Erros frecuentes

- Esquecer o atributo `required`
- Non pechar correctamente as chaves `{}`
- Confundir `=` con `==`
- Non usar comiñas nos textos
- Intentar validar sen seleccionar primeiro o elemento HTML

## Recomendacións

- Probar o código pouco a pouco
- Usar a consola do navegador
- Revisar os erros en DevTools
- Validar primeiro cun único campo

---

# Exercicio práctico 1

Crear un formulario de rexistro con:

- Nome
- Apelidos
- Email
- Idade
- Contrasinal

Requisitos:

- Todos obrigatorios
- Idade entre 18 e 99
- Password mínimo 8 caracteres
- Feedback visual

---

# Exercicio práctico 2

Crear unha validación en tempo real:

- O usuario escribe
- O campo cambia de cor automaticamente
- Mostrar mensaxe baixo o campo

---

# Resumo

As validacións web modernas combinan:

- HTML5
- JavaScript
- CSS
- Validación no servidor

O obxectivo principal é:

- Garantir datos correctos
- Mellorar UX
- Incrementar seguridade
