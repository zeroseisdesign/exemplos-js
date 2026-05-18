# Tema 5. Xestión de obxectos da linguaxe de guión

JavaScript traballa con obxectos que provee o navegador e o propio documento HTML. Estes obxectos permiten acceder e manipular elementos da páxina web, interactuar co usuario e controlar o comportamento do navegador. Comprender a xestión destes obxectos é fundamental para programar de forma efectiva en JavaScript.

## Xerarquía de obxectos

A xerarquía de obxectos é a estrutura na que os obxectos están organizados, onde uns conteñen a outros, formando unha cadea de relacións. Esta xerarquía facilita o acceso e a navegación entre os diferentes elementos e funcionalidades do navegador e do documento.

### Descrición de obxectos da xerarquía

- **window**: é o obxecto principal que representa a ventá do navegador. Contén todo o resto de obxectos.
- **document**: representa o documento HTML cargado na ventá. Permite acceder ao contido da páxina.
- **forms**: colección de formularios presentes no documento.
- **elements**: elementos individuais do formulario ou do documento, como inputs, botóns, etc.

Exemplo de xerarquía simple:

```text
window
 └── document
      └── forms
           └── inputs
```

### Propiedades compartidas dos obxectos

Moitos obxectos comparten propiedades e métodos que permiten acceder a información ou realizar accións.

Exemplos:

```javascript
console.log(document.title);
console.log(window.innerWidth);
```

### Navegar pola xerarquía dos obxectos

Para acceder aos obxectos e as súas propiedades úsase a notación de puntos (dot notation).

Exemplo:

```javascript
document.body.style.backgroundColor = "lightblue";
```

## Propiedades e métodos dos obxectos do navegador

O navegador proporciona obxectos que permiten interactuar co entorno onde se executa o código JavaScript.

### O obxecto superior window

É o obxecto principal que representa a ventá do navegador e contén todas as funcións e obxectos relacionados.

Exemplos:

```javascript
alert("Benvido");
window.open("https://www.google.com");
```

Outras propiedades e métodos útiles de `window`:

| Propiedade/Método | Descrición |
|---|---|
| `alert()` | Mostra unha xanela de aviso |
| `confirm()` | Mostra unha confirmación |
| `prompt()` | Solicita información ao usuario |
| `setTimeout()` | Executa código tras un tempo |
| `setInterval()` | Executa código repetidamente |

Táboa con algunhas funcións e propiedades comúns de window:

| Método/Propiedade | Descrición                          |
|------------------|-----------------------------------|
| alert()          | Mostra unha caixa de alerta        |
| open()           | Abre unha nova ventá ou pestana   |
| setTimeout()     | Executa unha función despois dun intervalo de tempo |
| innerWidth       | Ancho interior da ventá do navegador |

### O obxecto navigator

Proporciona información sobre o navegador e o sistema.

Exemplos:

```javascript
console.log(navigator.userAgent);
console.log(navigator.language);
```

### URL actual (location)

O obxecto **location** xestiona a dirección URL actual.

Exemplos:

```javascript
console.log(location.href);
location.reload();
```

Propiedades habituais de `location`:

| Propiedade | Descrición |
|---|---|
| `href` | URL completa |
| `hostname` | Nome do servidor |
| `pathname` | Ruta do recurso |
| `protocol` | Protocolo empregado |

### URL visitada polo usuario

O obxecto **history** permite navegar polas páxinas visitadas.

Exemplo:

```javascript
history.go(-1);
```

Tamén existen métodos específicos:

```javascript
history.back();
history.forward();
```

- `back()` retrocede unha páxina.
- `forward()` avanza unha páxina.

### Contido do documento actual (document)

O obxecto **document** permite acceder e modificar o contido HTML da páxina.

#### Título da páxina

```javascript
document.title = "Nova páxina";
```

#### Cor de fondo

```javascript
document.body.style.backgroundColor = "beige";
```

#### Formularios

```javascript
console.log(document.forms);
```

Tamén é posible acceder directamente aos campos dos formularios:

```javascript
let email = document.getElementById("email");

console.log(email.value);
```

A propiedade `value` permite obter ou modificar o valor dun campo.

## Propiedades e métodos dos obxectos do documento

O obxecto **document** é un dos máis utilizados para manipular o DOM.

### Propiedades do obxecto document

Algúns exemplos importantes de propiedades:

| Propiedade | Descrición                        |
|------------|---------------------------------|
| title      | Título da páxina                 |
| body       | Corpo do documento HTML          |
| forms      | Colección de formularios         |
| images     | Colección de imaxes no documento |

### Exemplos de propiedades de document

```javascript
console.log(document.title);
console.log(document.images.length);
```

### Métodos de document

Os métodos permiten seleccionar e modificar elementos HTML.

| Método             | Descrición                                   |
|--------------------|----------------------------------------------|
| getElementById()    | Selecciona un elemento polo seu ID           |
| querySelector()     | Selecciona o primeiro elemento que coincide cun selector CSS |
| querySelectorAll()  | Selecciona todos os elementos que coinciden cun selector CSS |
| createElement()     | Crea un novo elemento HTML                    |
| appendChild()       | Engade un elemento como fillo                 |
| removeChild()       | Elimina un fillo dun elemento                 |
| addEventListener()  | Engade un escoitador de eventos              |

### Modificación do contido HTML

Unha vez seleccionado un elemento do DOM, JavaScript permite modificar o seu contido, atributos ou estilos.

Métodos e propiedades máis habituais:

| Propiedade/Método | Descrición |
|---|---|
| `textContent` | Modifica ou obtén só o texto do elemento |
| `innerHTML` | Modifica ou obtén o contido HTML interno |
| `innerText` | Obtén o texto visible do elemento |
| `style` | Permite modificar estilos CSS |
| `classList.add()` | Engade unha clase CSS |
| `classList.remove()` | Elimina unha clase CSS |
| `classList.toggle()` | Engade ou elimina unha clase automaticamente |
| `setAttribute()` | Modifica atributos HTML |
| `getAttribute()` | Obtén o valor dun atributo |

#### textContent

**`textContent` úsase para modificar texto sen interpretar HTML.**

Exemplo:

```javascript
let titulo = document.getElementById("titulo");

titulo.textContent = "Novo título";
```

#### innerHTML

**`innerHTML` permite inserir código HTML dentro dun elemento.**

Exemplo:

```javascript
let caixa = document.getElementById("caixa");

caixa.innerHTML = "<strong>Texto en negra</strong>";
```

⚠️ Hai que usar `innerHTML` con coidado cando os datos proveñen do usuario para evitar problemas de seguridade.

#### Modificar estilos CSS

```javascript
let paragrafo = document.querySelector("p");

paragrafo.style.color = "blue";
paragrafo.style.fontSize = "20px";
```

#### Manipular clases CSS

```javascript
let menu = document.getElementById("menu");

menu.classList.add("visible");
menu.classList.toggle("activo");
```

#### Modificar atributos HTML

```javascript
let enlace = document.querySelector("a");

enlace.setAttribute("target", "_blank");
```

### Obtención de elementos HTML

**O obxecto `document` permite localizar elementos HTML para manipulalos con JavaScript.**

Métodos máis utilizados:

| Método | Descrición |
|---|---|
| `getElementById()` | Busca un elemento polo seu id |
| `getElementsByClassName()` | Busca elementos por clase |
| `getElementsByTagName()` | Busca elementos pola etiqueta HTML |
| `querySelector()` | Devolve o primeiro elemento que coincida cun selector CSS |
| `querySelectorAll()` | Devolve todos os elementos dun selector CSS |

Exemplo:

```javascript
let titulo = document.getElementById("titulo");

titulo.textContent = "Novo título";
```

### Exemplo práctico

```javascript
let titulo = document.getElementById("titulo");

titulo.textContent = "Benvidos";
```

### Fluxo de escritura do documento

**O DOM permite modificar o documento HTML de forma dinámica sen recargar a páxina.**

JavaScript pode crear elementos novos, engadilos, eliminalos ou modificar os existentes.

#### Crear elementos HTML

```javascript
let novo = document.createElement("p");

novo.textContent = "Texto engadido";
```

#### Engadir elementos ao documento

```javascript
document.body.appendChild(novo);
```

#### Eliminar elementos

```javascript
let aviso = document.getElementById("aviso");

aviso.remove();
```

#### Inserir elementos nunha posición concreta

```javascript
let lista = document.getElementById("lista");

lista.prepend(novo);
```

- `appendChild()` engade ao final.
- `prepend()` engade ao inicio.
- `remove()` elimina un elemento do DOM.

### Métodos open() e close() de document

Estes métodos permiten abrir e pechar un fluxo de escritura do documento, pero hoxe en día úsanse moi pouco debido ao uso do DOM dinámico.

## Propiedades e métodos dos obxectos do formulario

**JavaScript permite acceder, validar e modificar os datos introducidos polos usuarios nos formularios HTML.**

Os campos poden seleccionarse igual que calquera outro elemento do DOM.

Exemplo:

```javascript
let nome = document.getElementById("nome");

console.log(nome.value);
```

### Propiedades principais do obxecto form

| Propiedade | Descrición                       |
|------------|---------------------------------|
| name       | Nome do formulario              |
| action     | URL á que se envían os datos   |
| method     | Método de envío (GET ou POST)  |
| target     | Onde se abre a resposta (p.ex. _blank, _self) |

### Manipulación de campos do formulario

Os campos dun formulario poden modificarse mediante JavaScript.

#### Cambiar valores

```javascript
let usuario = document.getElementById("usuario");

usuario.value = "Ana";
```

#### Limpar campos

```javascript
usuario.value = "";
```

#### Marcar un checkbox

```javascript
let aceptar = document.getElementById("aceptar");

aceptar.checked = true;
```

#### Seleccionar opcións dun select

```javascript
let pais = document.getElementById("pais");

pais.value = "Es";
```

### Métodos do obxecto form

| Método | Descrición |
|---|---|
| `submit()` | Envía o formulario |
| `reset()` | Reinicia os campos |

Exemplo:

```javascript
let formulario = document.getElementById("contacto");

formulario.reset();
```

### Métodos GET e POST

Os formularios poden enviar datos mediante diferentes métodos HTTP.

| Método | Características |
|---|---|
| `GET` | Os datos viaxan na URL |
| `POST` | Os datos envíanse ocultos no corpo da petición |

Exemplo GET:

```html
<form method="get">
```

Exemplo POST:

```html
<form method="post">
```

## Propiedades e métodos doutros obxectos da linguaxe

### Document

Resumo e exemplo:

```javascript
document.title = "Empresa";
```

### Window

```javascript
window.open("https://openai.com");
```

### History

```javascript
history.go(-1);
```

Tamén existen métodos específicos:

```javascript
history.back();
history.forward();
```

- `back()` retrocede unha páxina.
- `forward()` avanza unha páxina.

### Location

```javascript
console.log(location.hostname);
```

Propiedades habituais de `location`:

| Propiedade | Descrición |
|---|---|
| `href` | URL completa |
| `hostname` | Nome do servidor |
| `pathname` | Ruta do recurso |
| `protocol` | Protocolo empregado |

### Navigator

```javascript
console.log(navigator.appName);
```

# Exercicio práctico

Imagina que estás a desenvolver unha páxina web corporativa. Realiza o seguinte:

- Cambia o título da páxina de forma dinámica con JavaScript.
- Mostra o idioma do navegador nun elemento HTML.
- Engade un botón que cambie a cor de fondo da páxina cando se prema.
- Engade outro botón que recargue a páxina ao ser premer.
- Utiliza `getElementById()` para seleccionar elementos e `addEventListener()` para asignar os eventos aos botóns.

## Obxectivos do exercicio

- Practicar a manipulación do DOM para modificar o título e o estilo.
- Empregar obxectos do navegador para obter información.
- Utilizar métodos para xestionar eventos e interaccións.
- Comprender a navegación e actualización da páxina mediante JavaScript.