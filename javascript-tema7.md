# Tema 7. Búsqueda e análise de scripts

## Introdución

Na programación web é habitual reutilizar código xa existente.

Os desenvolvedores consultan documentación, bibliotecas, foros e exemplos para:

- Aprender novas técnicas.
- Resolver erros.
- Optimizar código.
- Integrar funcionalidades.
- Reutilizar scripts existentes.

Saber buscar correctamente é unha habilidade fundamental no desenvolvemento web moderno.

---

# 1. Búsqueda en sitios especializados

Internet ofrece miles de recursos relacionados con JavaScript.

Non todas as fontes teñen a mesma calidade, polo que é importante coñecer os sitios máis fiables.

---

## 1.1 Páxinas oficiais

As páxinas oficiais son a fonte máis fiable.

Inclúen:

- Documentación actualizada.
- Sintaxe oficial.
- Compatibilidade.
- Exemplos reais.
- Boas prácticas.

### Exemplos de páxinas oficiais

| Páxina | Descrición |
|---|---|
| MDN Web Docs | Documentación oficial de HTML, CSS e JavaScript |
| W3C | Organización dos estándares web |
| ECMAScript | Estándar oficial de JavaScript |
| Angular Docs | Documentación oficial de Angular |
| React Docs | Documentación oficial de React |
| Bootstrap Docs | Documentación oficial de Bootstrap |

---

### Exemplo de busca

Buscar información sobre `querySelector`:

```javascript
const titulo = document.querySelector("h1");
```

Nunha páxina oficial atoparemos:

- Definición.
- Sintaxe.
- Parámetros.
- Valor devolto.
- Compatibilidade.
- Exemplos.

---

## 1.2 Tutoriales

Os tutoriales explican paso a paso como realizar tarefas concretas.

Son útiles para:

- Principiantes.
- Aprender novas librerías.
- Ver proxectos completos.
- Resolver casos prácticos.

---

### Características dun bo tutorial

- Explicación clara.
- Código comentado.
- Exemplos reais.
- Estrutura ordenada.
- Información actualizada.

---

### Exemplo de uso

Buscar:

```text
javascript menu hamburguesa tutorial
```

Pode devolver exemplos de:

- Menús responsive.
- Animacións.
- Eventos click.
- Uso de classList.

---

## 1.3 Foros

Os foros permiten resolver dúbidas específicas.

Neles participan desenvolvedores de distintos niveis.

---

### Utilidades dos foros

- Resolver erros.
- Compartir solucións.
- Consultar problemas frecuentes.
- Ver distintas formas de programar.

---

### Foros coñecidos

| Foro | Utilidade |
|---|---|
| Stack Overflow | Preguntas técnicas |
| Reddit | Comunidades de programación |
| GitHub Issues | Problemas dunha librería |
| Discord | Axuda en tempo real |

---

### Exemplo de busca nun foro

```text
javascript addEventListener not working
```

Moitas veces o problema xa foi resolto por outros usuarios.

---

## 1.4 Bibliotecas

Unha biblioteca ou librería é un conxunto de código reutilizable.

Permite engadir funcionalidades sen programalas desde cero.

---

### Exemplos de bibliotecas JavaScript

| Biblioteca | Utilidade |
|---|---|
| jQuery | Manipulación do DOM |
| GSAP | Animacións |
| Chart.js | Gráficas |
| Swiper | Sliders e carruseis |
| Axios | Peticións HTTP |

---

### Exemplo

Biblioteca Swiper:

```javascript
const swiper = new Swiper('.slider');
```

Con poucas liñas obtense un slider funcional.

---

# 2. Operadores booleanos

Os operadores booleanos permiten traballar con valores lóxicos.

Os resultados son:

- `true`
- `false`

Utilízanse continuamente en condicións e buscas.

---

## 2.1 Funcionamento dos operadores booleanos

### Operador AND

Símbolo:

```javascript
&&
```

As dúas condicións deben cumprirse.

### Exemplo

```javascript
let idade = 20;
let acceso = true;

if (idade >= 18 && acceso === true) {
    console.log("Pode entrar");
}
```

---

### Operador OR

Símbolo:

```javascript
||
```

Basta con que unha condición sexa verdadeira.

### Exemplo

```javascript
let admin = false;
let editor = true;

if (admin || editor) {
    console.log("Ten permisos");
}
```

---

### Operador NOT

Símbolo:

```javascript
!
```

Invierte o valor booleano.

### Exemplo

```javascript
let bloqueado = false;

if (!bloqueado) {
    console.log("Usuario activo");
}
```

---

## 2.2 Utilización en distintos buscadores

Os buscadores tamén utilizan operadores booleanos.

Permiten facer buscas máis precisas.

---

### Exemplos de uso

| Busca | Resultado |
|---|---|
| javascript AND array | Inclúe ambos termos |
| javascript OR typescript | Un dos dous termos |
| javascript NOT jquery | Exclúe jquery |

---

### Exemplo real

```text
javascript fetch api NOT jquery
```

Busca información sobre Fetch API excluíndo resultados relacionados con jQuery.

---

# 3. Técnicas de búsqueda

Buscar correctamente permite atopar solucións máis rápido.

Unha boa busca debe ser:

- Clara.
- Específica.
- Técnica.
- Breve.

---

## 3.1 Expresiones

As expresións concretas melloran os resultados.

---

### Mala busca

```text
erro javascript
```

É demasiado xenérica.

---

### Boa busca

```text
javascript cannot read properties of null
```

Agora o buscador entende o problema real.

---

## 3.2 Definiciones de búsquedas

É importante definir:

- Linguaxe.
- Librería.
- Problema.
- Contexto.
- Tipo de solución.

---

### Exemplo

```text
bootstrap modal close javascript
```

Inclúe:

- Framework.
- Compoñente.
- Acción.
- Linguaxe.

---

## 3.3 Especificaciones

As buscas técnicas deben incluír detalles.

---

### Información útil

| Tipo de dato | Exemplo |
|---|---|
| Linguaxe | JavaScript |
| Framework | Angular |
| Versión | Angular 19 |
| Erro | Undefined |
| Función | addEventListener |

---

### Exemplo completo

```text
angular 19 addEventListener undefined error
```

---

# 4. Técnicas de refinamento de búsquedas

Refinar unha busca permite obter resultados máis exactos.

---

## 4.1 Utilización de separadores

Os separadores axudan a delimitar contidos.

---

### Comiñas

Buscan unha frase exacta.

```text
"javascript array methods"
```

---

### Guión

Exclúe palabras.

```text
javascript events -jquery
```

---

### site:

Limita a unha web concreta.

```text
querySelector site:developer.mozilla.org
```

---

### filetype:

Busca tipos de ficheiro.

```text
javascript tutorial filetype:pdf
```

---

## 4.2 Utilización de elementos de unión

Permiten combinar condicións.

---

### Exemplo con OR

```text
javascript OR typescript arrays
```

---

### Exemplo con AND

```text
javascript AND bootstrap form validation
```

---

### Exemplo combinado

```text
javascript fetch api AND json NOT jquery
```

---

# 5. Reutilización de scripts

Reutilizar scripts permite:

- Aforrar tempo.
- Reducir erros.
- Empregar solucións probadas.
- Mellorar a produtividade.

---

## 5.1 Scripts gratuitos

Existen múltiples recursos gratuítos para reutilizar código JavaScript.



---

### Tipos de recursos

| Recurso | Utilidade | Exemplo |
|---|---|---|
| Snippets | Pequenos fragmentos de código | Menú hamburguesa |
| Plugins | Funcionalidades completas | Slider de imaxes |
| Templates | Estruturas predeseñadas | Landing page Bootstrap |
| Librerías | Funcións reutilizables | GSAP, Axios |
| APIs | Servizos externos accesibles desde JavaScript | OpenWeather API |
| Ferramentas IA | Xeración e explicación de código | ChatGPT, GitHub Copilot |

---

### Exemplo de snippet

```javascript
window.addEventListener("scroll", function() {
    console.log("Scroll detectado");
});
```

Moitos desenvolvedores comparten funcións, librerías e compoñentes que poden empregarse en proxectos web.

| Recurso | Utilidade
|---|---|
| GitHub | Compartir proxectos e código aberto |
| CodePen | Exemplos interactivos HTML, CSS e JS |
| JSFiddle | Probas rápidas de código |
| Bootstrap | Compoñentes visuais e scripts preparados |

---

## Anexo. Uso da IA na programación de scripts

A intelixencia artificial forma parte das ferramentas actuais de desenvolvemento.

Pode utilizarse para:

- Xerar exemplos de código.
- Detectar erros.
- Explicar funcións.
- Crear estruturas HTML.
- Xerar scripts JavaScript.
- Mellorar código existente.

---

### Exemplos de ferramentas IA

| Ferramenta | Utilidade |
|---|---|
| ChatGPT | Xeración e explicación de código |
| GitHub Copilot | Axuda integrada no editor |
| Gemini | Asistencia IA de Google |
| Claude | Explicación e análise de código |

---

### Exemplo de uso

Petición a unha IA:

```text
Crear un menú hamburguesa en JavaScript usando classList.toggle
```

A ferramenta pode devolver:

- HTML.
- CSS.
- JavaScript.
- Explicación paso a paso.

---

## Boas prácticas no uso da IA

| Boa práctica | Explicación |
|---|---|
| Revisar o código | A IA pode cometer erros |
| Comprender o resultado | Non copiar sen entender |
| Probar o funcionamento | Validar sempre o código |
| Adaptar o código | Personalizar segundo o proxecto |
| Consultar documentación oficial | Verificar boas prácticas |

---

A IA debe entenderse como unha ferramenta de apoio ao desenvolvemento e á aprendizaxe, non como substitución do coñecemento técnico.