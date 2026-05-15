

# 4. Desenvolvemento de scripts

## Ferramentas de desenvolvemento, utilización

As ferramentas de desenvolvemento permiten **escribir, organizar, probar e depurar código JavaScript** de maneira máis eficiente. Actualmente o habitual é traballar con **editores modernos** que incorporan **autocompletado**, resaltado de sintaxe, **integración con Git** e **ferramentas de depuración**.

### Crear scripts con ferramentas de texto

Os **editores de código** permiten escribir scripts de forma máis cómoda e profesional. **Detectan erros** mentres se escribe o código, axudan co **autocompletado** e facilitan a **organización dos proxectos web**.

Exemplos habituais:

| Ferramenta | Descrición |
|---|---|
| Visual Studio Code | Editor gratuíto moi utilizado no desenvolvemento web moderno. Permite instalar extensións e integrar terminal, Git e depuración. |
| Sublime Text | Editor rápido e lixeiro orientado á edición de código. |
| Notepad++ | Editor sinxelo e práctico para edición básica de scripts en Windows. |

### Crear scripts con aplicacións web

Tamén existen **plataformas online** para escribir e probar código **directamente desde o navegador** **sen instalar programas** no equipo.

| Aplicación | Utilidade |
|---|---|
| CodePen | Crear exemplos rápidos HTML, CSS e JavaScript |
| JSFiddle | Compartir probas de código |
| StackBlitz | Simular proxectos web completos |

### Recursos na web para a creación de scripts

Internet ofrece **documentación oficial**, **exemplos prácticos**, **videotitoriais** e **repositorios de código** para aprender e resolver dúbidas.

| Recurso | Utilidade |
|---|---|
| https://developer.mozilla.org | Documentación oficial e actualizada de JavaScript e tecnoloxías web |
| https://www.w3schools.com | Titoriais básicos con exemplos sinxelos |
| https://github.com | Compartir proxectos e descargar exemplos de código |
| https://codepen.io | Crear probas rápidas HTML, CSS e JavaScript |
| https://stackblitz.com | Simular proxectos web completos online |

---

# Depuración de erros: erros de sintaxe e de execución

A depuración consiste en **localizar, analizar e corrixir erros** no código JavaScript. Durante o desenvolvemento é habitual cometer erros, polo que resulta fundamental saber **interpretar as mensaxes da consola** e revisar paso a paso o funcionamento do script.

## Definición dos tipos de erros

### Erros de sintaxe

Prodúcense cando o **código está mal escrito** e **JavaScript non pode interpretalo**.

Exemplo:

```javascript
let nome = "Ana
```

Falta pechar as comiñas.

Este tipo de erro adoita **impedir que o script se execute**. O navegador ou o editor normalmente indican a **liña exacta** onde se detecta o problema.

### Erros de execución

Prodúcense cando o código é correcto sintacticamente, pero **falla ao executarse**.

Exemplo:

```javascript
let numero = 10;

console.log(numeroo);
```

A variable `numeroo` non existe.

Neste caso **o script comeza a executarse**, pero **detense** ao chegar á instrución incorrecta.

---

## Escritura do programa fonte

O programa fonte é o **código escrito polo desenvolvedor**.

Exemplo:

```javascript
let idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

---

## Compilación do programa fonte

JavaScript é unha **linguaxe interpretada**. Isto significa que o navegador **executa o código directamente** **sen necesidade dunha compilación tradicional** como ocorre noutros linguaxes.

Ao abrir a páxina web, o navegador carga os scripts e comproba automaticamente se existen erros de sintaxe ou problemas durante a execución.

Exemplo:

```javascript
console.log("Programa iniciado");
```
Actualmente existen ferramentas como TypeScript que permiten escribir JavaScript tipado. Neste caso o código transpílase a JavaScript antes de executarse no navegador.

TypeScript engade características como:

- Tipado de variables.
- Mellor detección de erros.
- Maior organización en proxectos grandes.

Exemplo:

```typescript
let idade: number = 25;
```

Posteriormente o código convértese automaticamente a JavaScript.

---

## Corrección de erros de sintaxe

Os editores modernos mostran os **erros automaticamente**.

Exemplo incorrecto:

```javascript
if (true {
  console.log("Erro");
}
```

Exemplo correcto:

```javascript
if (true) {
  console.log("Correcto");
}
```

Pasos habituais para detectar erros de sintaxe:

1. **Revisar a liña indicada pola consola**.
2. **Comprobar parénteses, chaves e comiñas**.
3. **Revisar puntos e comas** ou nomes incorrectos.
4. **Gardar e executar novamente** o script.

---

## Corrección de erros de execución

A **consola do navegador** mostra información sobre os erros durante a execución.

Exemplo:

```javascript
let usuario = null;

console.log(usuario.nome);
```

Neste caso prodúcese un erro porque `usuario` non contén un obxecto.

Pasos habituais para detectar erros de execución:

1. **Abrir a consola do navegador**.
2. **Ler a mensaxe de erro completa**.
3. **Identificar a variable ou función** que produce o problema.
4. **Revisar os datos utilizados**.
5. **Corrixir o código** e volver probalo.

---

# Mensaxes de erro

As mensaxes de erro indican o **tipo de problema** e a **liña onde se produce**.

Exemplo habitual na consola:

```text
Uncaught ReferenceError: variable is not defined
```

As mensaxes de erro adoitan indicar:

- **O tipo de erro.**
- **O arquivo onde se produce.**
- **A liña do código afectada.**
- **A descrición do problema.**

---

## Funcións para controlar os erros

JavaScript permite **controlar erros** mediante **estruturas especiais**.

| Instrución | Descrición |
|---|---|
| try | Executa un bloque de código |
| catch | Captura o erro producido |
| finally | Executa código ao finalizar |
| throw | Xera un erro manualmente |

Exemplo:

```javascript
try {

  let resultado = numero + 10;

} catch (erro) {

  console.log("Produciuse un erro");

}
```

---

# Ferramentas de depuración do navegador

Os navegadores modernos incorporan ferramentas de desenvolvemento que permiten **analizar o código JavaScript**, **detectar erros** e **probar cambios en tempo real**.

| Ferramenta | Utilidade |
|---|---|
| Console | Mostrar erros e mensaxes |
| Sources | Revisar scripts |
| Network | Ver peticións web |
| Elements | Inspeccionar HTML e CSS |

Abrir normalmente con:

```text
F12
```

ou:

```text
Ctrl + Shift + I
```

## Uso básico da consola

A consola é unha das **ferramentas máis importantes** durante o desenvolvemento.

Permite:

- **Mostrar información**
- **Detectar erros**
- **Executar código manualmente**
- **Comprobar valores de variables**

Exemplo:

```javascript
let nome = "Ana";

console.log(nome);
```

A consola mostrará o valor almacenado na variable.

---

# Exercicio práctico

Crear unha páxina web que:

- **Declare varias variables.**
- **Realice unha operación matemática.**
- **Mostre datos por consola.**
- **Solicite un nome mediante `prompt()`.**
- **Mostre unha mensaxe personalizada.**
- **Inclúa un erro intencionado.**
- **Localice e corrixa o erro usando a consola do navegador.**

Exemplo inicial:

```javascript
let nome = prompt("Introduce o teu nome");

console.log("Benvido " + nome);

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
```