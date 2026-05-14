# 3. Elementos básicos da linguaxe de guión

As linguaxes de guión como JavaScript permiten crear páxinas web dinámicas e interactivas. Para iso empregan variables, operadores, estruturas de control e funcións.

---

# Variables e identificadores

As variables permiten almacenar información para poder utilizala posteriormente no programa.

Un identificador é o nome que recibe a variable.

## Declaración de variables

En JavaScript utilízase normalmente `let` para crear variables.

Exemplo de declaración de variables:

```javascript
let nome = "Ana";
let idade = 25;
```

Neste exemplo:
- `nome` almacena un texto.
- `idade` almacena un número.

Os nomes das variables:
- Non poden comezar por números.
- Non poden levar espazos.
- Recoméndase usar nomes claros e descritivos.

Exemplos válidos:

```javascript
let usuario;
let idadeAlumno;
let totalCompra;
```

---

## Operacións con variables

As variables poden combinarse e modificarse.

Exemplo de operación con variables:

```javascript
let prezo = 10;
let unidades = 3;

let total = prezo * unidades;

console.log(total);
```

Neste caso calcúlase o total multiplicando o prezo polas unidades.

---

# Tipos de datos

Os datos almacenados nunha variable poden ser de distintos tipos.

---

## Datos booleanos

Só poden ter dous valores:
- `true`
- `false`

Exemplo de datos booleanos:

```javascript
let conectado = true;
let aprobado = false;
```

Úsanse habitualmente en condicións e comparacións.

---

## Datos numéricos

Representan números enteiros ou decimais.

Exemplo de datos numéricos:

```javascript
let idade = 20;
let altura = 1.75;
```

---

## Datos de texto

Os textos escríbense entre comiñas.

Exemplo de datos de texto:

```javascript
let nome = "Carlos";
let mensaxe = 'Benvido';
```

---

## Valores nulos

Representan ausencia de valor.

Exemplo de valor nulo:

```javascript
let usuario = null;
```

Tamén existe `undefined`, que indica que unha variable aínda non ten valor asignado.

---

# Operadores e expresións

Os operadores permiten realizar operacións cos datos.

---

## Operadores de asignación

Asignan valores ás variables.

Exemplo de operador de asignación:

```javascript
let numero = 5;
```

Tamén existen formas abreviadas.

Exemplo de asignación abreviada:

```javascript
numero += 2;
```

Equivale a:

```javascript
numero = numero + 2;
```

---

## Operadores de comparación

Comparan dous valores e devolven `true` ou `false`.

Exemplo de operador de comparación:

```javascript
let idade = 20;

console.log(idade >= 18);
```

Operadores habituais:
- `==`
- `===`
- `!=`
- `>`
- `<`
- `>=`
- `<=`

---

## Operadores aritméticos

Permiten realizar cálculos matemáticos.

Exemplo de operadores aritméticos:

```javascript
let suma = 5 + 3;
let resta = 8 - 2;
let multiplicacion = 4 * 2;
let division = 10 / 2;
```

---

## Operadores sobre bits

Traballan directamente cos bits dos números.

Exemplo de operador sobre bits:

```javascript
let resultado = 5 & 1;
```

Os máis habituais son:
- `&`
- `|`
- `^`

Utilízanse en programación avanzada.

---

## Operadores lóxicos

Permiten combinar condicións.

Exemplo de operadores lóxicos:

```javascript
let idade = 20;
let acceso = true;

console.log(idade >= 18 && acceso);
```

Principais operadores:
- `&&` → E
- `||` → OU
- `!` → NON

---

## Operadores de cadeas de caracteres

Permiten unir textos.

Exemplo de operador de cadeas:

```javascript
let nome = "Ana";
let apelido = "López";

let completo = nome + " " + apelido;
```

---

## Operadores especiais

JavaScript incorpora operadores específicos.

Exemplo con `typeof`:

```javascript
let idade = 20;

console.log(typeof idade);
```

Mostra o tipo de dato da variable.

---

## Expresións de cadea

Combinan textos.

Exemplo de expresión de cadea:

```javascript
let mensaxe = "Ola " + "mundo";
```

---

## Expresións aritméticas

Realizan cálculos.

Exemplo de expresión aritmética:

```javascript
let resultado = (5 + 3) * 2;
```

---

## Expresións lóxicas

Avalían condicións.

Exemplo de expresión lóxica:

```javascript
let acceso = 20 > 18;
```

---

## Expresións de obxecto

Permiten acceder ás propiedades dun obxecto.

Exemplo de expresión de obxecto:

```javascript
let alumno = {
  nome: "Ana",
  idade: 22
};

console.log(alumno.nome);
```

---

# Estruturas de control

Permiten controlar o fluxo do programa.

---

## Sentenza IF

Executa código se se cumpre unha condición.

Exemplo de sentenza IF:

```javascript
let idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

---

## Sentenza WHILE

Repítese mentres a condición sexa verdadeira.

Exemplo de sentenza WHILE:

```javascript
let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}
```

---

## Sentenza FOR

Utilízase cando se coñece o número de repeticións.

Exemplo de sentenza FOR:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## Sentenza BREAK

Interrompe un bucle.

Exemplo de sentenza BREAK:

```javascript
for (let i = 1; i <= 10; i++) {

  if (i === 5) {
    break;
  }

  console.log(i);
}
```

---

## Sentenza CONTINUE

Salta unha iteración.

Exemplo de sentenza CONTINUE:

```javascript
for (let i = 1; i <= 5; i++) {

  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

---

## Sentenza SWITCH

Permite avaliar múltiples opcións.

Exemplo de sentenza SWITCH:

```javascript
let dia = 2;

switch (dia) {

  case 1:
    console.log("Luns");
    break;

  case 2:
    console.log("Martes");
    break;

  default:
    console.log("Outro día");
}
```

---

# Funcións

As funcións permiten reutilizar código.

Unha función é un bloque de instrucións que se pode executar cando sexa necesario.
Permite organizar mellor o código e evitar repeticións.

## Definición de funcións

As funcións defínense coa palabra clave function seguida dun nome.

```javascript
function saudar() {

  console.log("Ola");

}
```

---

## Sentenza RETURN

Permite devolver un resultado.

Exemplo de sentenza RETURN:

```javascript
function sumar(a, b) {

  return a + b;

}

let resultado = sumar(2, 3);
```

---

## Propiedades das funcións

As funcións poden recibir parámetros.

Exemplo de función con parámetros:

```javascript
function saudar(nome) {

  console.log("Ola " + nome);

}
```

---

## Funcións predefinidas da linguaxe de guión

JavaScript inclúe funcións xa preparadas.

Exemplo de funcións predefinidas:

```javascript
console.log("Texto");
parseInt("25");
Number("10");
```

---

## Creación de funcións

Tamén poden gardarse en variables.

Exemplo de función gardada en variable:

```javascript
let multiplicar = function(a, b) {

  return a * b;

};
```

---

## Particularidades das funcións na linguaxe de guión

En JavaScript as funcións considéranse valores e poden:
- Gardarse en variables.
- Pasarse como parámetros.
- Executarse desde eventos.

Exemplo de función usada en evento:

```javascript
boton.addEventListener("click", mostrar);
```

---

# Instrucións de entrada / saída

Permiten introducir e mostrar información.

---

## Descrición e funcionamento das instrucións de entrada e saída

O usuario pode introducir datos e o programa pode mostrar resultados na páxina.

---

## Lectura de teclado de datos

Pode obterse información desde un campo HTML.

Exemplo de lectura de dato desde un campo:

```javascript
let nome = document.getElementById("nome").value;
```

---

## Almacenamento en variables

Os datos obtidos poden gardarse.

Exemplo de almacenamento en variable:

```javascript
let idade = 20;
```

---

## Impresión en pantalla do resultado

O resultado pode mostrarse nun elemento HTML.

Exemplo de impresión en pantalla:

```javascript
document.getElementById("resultado").textContent = "Ola";
```

---

## Sentenza PROMPT

Permite solicitar información ao usuario.

Exemplo de uso de prompt:

```javascript
let nome = prompt("Introduce o teu nome");
```

---

## Sentencia DOCUMENT.WRITE

Actualmente é recomendable modificar elementos HTML desde JavaScript, inda que con docuemt.write podemos dar saida os datos.

Exemplo de saída en páxina:

```javascript
document.write("Benvido " + nome);
```

---

# Exercicio práctico

Crear unha páxina web con:
- Un campo para introducir un número.
- Un botón.
- Un elemento HTML para mostrar o resultado.

Ao facer clic no botón:
- Se o número é maior ca 0 mostrar “Positivo”.
- Se é menor ca 0 mostrar “Negativo”.
- Se é 0 mostrar “Cero”.

Empregar:
- Variables.
- IF.
- Funcións.
- Eventos.
- Entrada e saída de datos.
