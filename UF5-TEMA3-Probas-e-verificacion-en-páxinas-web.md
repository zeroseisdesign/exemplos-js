# 3. Probas e verificación en páxinas web

A fase de probas é fundamental no desenvolvemento web. Permite detectar erros, comprobar o funcionamento da páxina e garantir que a experiencia de usuario sexa correcta en distintos dispositivos e navegadores.

Actualmente, ademais da funcionalidade, tamén é necesario verificar aspectos como o rendemento, a accesibilidade, a seguridade e o comportamento responsive.

---

# 3.1. Técnicas de verificación

As técnicas de verificación permiten comprobar que unha páxina web cumpre os requisitos funcionais e visuais definidos durante o seu desenvolvemento.

## Fundamentais

As comprobacións básicas deben realizarse durante todo o proceso de desenvolvemento e non unicamente ao final.

### Aspectos que se deben verificar

- Funcionamento dos enlaces.
- Navegación entre páxinas.
- Funcionamento dos formularios.
- Visualización correcta das imaxes.
- Adaptación a diferentes tamaños de pantalla.
- Funcionamento do código JavaScript.
- Accesibilidade dos contidos.
- Velocidade de carga.

### Procedemento recomendado

1. Executar a páxina nun navegador.
2. Probar todas as opcións dispoñibles.
3. Revisar a consola do navegador.
4. Comprobar o comportamento en dispositivos móbiles.
5. Verificar a accesibilidade básica.

### Exemplo

Se existe un formulario de contacto:

- Introducir datos válidos.
- Introducir datos incorrectos.
- Deixar campos baleiros.
- Comprobar que aparecen as mensaxes de erro adecuadas.

## Técnicas HTML

Permiten comprobar que o código HTML segue os estándares actuais.

### Verificación da estrutura

Comprobar:

- Existencia de `<!DOCTYPE html>`.
- Etiquetas correctamente pechadas.
- Xerarquía correcta de encabezados.
- Uso de etiquetas semánticas.

### Exemplo correcto

```html
<header>
    <h1>Empresa XYZ</h1>
</header>

<main>
    <section>
        <h2>Servizos</h2>
    </section>
</main>
```

### Erros habituais

```html
<h1>Título
<p>Texto
```

As etiquetas non están correctamente pechadas.

### Ferramentas recomendadas

- Validador W3C.
- Inspector do navegador.
- Extensións HTML Validator.

## Técnicas CSS

Permiten comprobar que os estilos se aplican correctamente.

### Aspectos a revisar

- Aliñación dos elementos.
- Tamaños responsivos.
- Contraste de cores.
- Tipografías.
- Espazados.
- Compatibilidade dos estilos.

### Exemplo

```css
.card {
    display: flex;
    gap: 1rem;
}
```

Comprobar:

- Que os elementos aparecen correctamente aliñados.
- Que o comportamento é adecuado en móbiles.

### Verificación responsive

Usar as ferramentas de desenvolvedor para simular:

- Móbiles.
- Tablets.
- Portátiles.
- Monitores grandes.

---

# 3.2. Ferramentas de depuración para distintos navegadores

Os navegadores modernos incorporan ferramentas avanzadas para analizar e corrixir problemas.

As máis utilizadas son:

- Google Chrome DevTools.
- Mozilla Firefox Developer Tools.
- Microsoft Edge DevTools.

A apertura realízase normalmente coa tecla F12 ou Ctrl + Shift + I.

As ferramentas de desenvolvedor son moi semellantes en Chrome, Edge e Firefox. Aínda que a aparencia pode variar lixeiramente, as pestanas e funcionalidades principais son practicamente as mesmas.

### Pestanas máis utilizadas

#### Elements / Inspector

Permite visualizar e modificar temporalmente o HTML e CSS da páxina.

Usos habituais:

- Localizar elementos HTML.
- Comprobar clases e identificadores.
- Probar cambios de estilo.
- Analizar a estrutura do DOM.

#### Console

Mostra erros, avisos e mensaxes xeradas por JavaScript.

Usos habituais:

- Detectar erros de programación.
- Executar instrucións JavaScript.
- Mostrar información mediante `console.log()`.

#### Network (Rede)

Permite analizar todos os recursos descargados pola páxina.

Usos habituais:

- Detectar imaxes demasiado pesadas.
- Comprobar ficheiros CSS e JavaScript cargados.
- Analizar tempos de carga.
- Detectar recursos inexistentes (erro 404).

#### Sources (Fontes)

Mostra os ficheiros HTML, CSS e JavaScript cargados polo sitio web.

Usos habituais:

- Revisar o código executado.
- Localizar erros JavaScript.
- Establecer puntos de interrupción (breakpoints).

#### Storage / Almacenamento

Permite visualizar os datos gardados polo navegador.

Usos habituais:

- Consultar Local Storage.
- Consultar Session Storage.
- Revisar cookies.
- Eliminar datos almacenados durante as probas.

## Utilidades para HTML

A pestana Elements permite inspeccionar a estrutura da páxina.

### Funcionalidades

- Ver etiquetas HTML.
- Modificar contido en tempo real.
- Revisar atributos.
- Analizar a estrutura do DOM.

## Utilidades para JavaScript

A consola permite visualizar erros e executar instrucións.

### Exemplo

```javascript
console.log("Páxina cargada");
```

### Outros usos

```javascript
let usuario = "Ana";
console.log(usuario);
```

```javascript
boton.addEventListener("click", () => {
    console.log("Pulsado");
});
```

### Erro típico

```javascript
document.getElementById("menu").innerHTML = texto;
```

Se a variable non existe producirase un erro na consola.

## Utilidades para CSS

Permiten analizar os estilos aplicados.

### Funcionalidades

- Ver estilos activos.
- Identificar regras sobrescritas.
- Probar cambios en tempo real.
- Visualizar tamaños e marxes.

## Utilidades para DOM

O DOM (Document Object Model) representa todos os elementos HTML da páxina como obxectos manipulables mediante JavaScript.

### Exemplo

```html
<p id="mensaxe">Ola mundo</p>
```

```javascript
document.getElementById("mensaxe").textContent = "Novo texto";
```

Un dos usos máis frecuentes do inspector é comprobar como JavaScript modifica o DOM en tempo real ao pulsar botóns, validar formularios ou cargar contido dinámico.

---

# 3.3. Verificación da compatibilidade de scripts

Os navegadores actuais implementan os estándares web de forma moi semellante, pero aínda poden existir pequenas diferenzas.

O obxectivo é garantir que a páxina funcione correctamente en Chrome, Firefox, Edge, Safari e navegadores móbiles.

## Parámetros para distintos navegadores

Actualmente non se recomenda detectar navegadores mediante o seu nome.

### Método antigo

```javascript
if (navigator.userAgent.includes("Chrome")) {
    // código específico
}
```

### Método recomendado

```javascript
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition();
}
```

Este sistema coñécese como detección de características (Feature Detection).

## Creación de código alternativo para diversos navegadores

Nalgunhas ocasións unha funcionalidade moderna pode non estar dispoñible nun navegador determinado ou nun dispositivo antigo.

Nestes casos é recomendable ofrecer unha alternativa para que a páxina siga funcionando correctamente.

### Exemplo

```javascript
if ("share" in navigator) {
    navigator.share({
        title: "Exemplo"
    });
} else {
    alert("Compartición non dispoñible");
}
```

## Uso de Polyfills

Antigamente era frecuente empregar polyfills para engadir compatibilidade con funcionalidades modernas en navegadores antigos.

Na actualidade, a maioría dos navegadores actualízanse automaticamente e o seu uso é moito menos habitual.

Por este motivo, nos proxectos web actuais adoita ser suficiente comprobar a dispoñibilidade dunha funcionalidade mediante Feature Detection e proporcionar unha alternativa cando sexa necesario.

## Comprobación final antes da publicación

✅ Non existen erros na consola.

✅ Todos os enlaces funcionan.

✅ Os formularios validan correctamente.

✅ A páxina é responsive.

✅ As imaxes cargan correctamente.

✅ O HTML é válido.

✅ O CSS funciona en distintos navegadores.

✅ JavaScript non produce erros.

✅ Cumpre criterios básicos de accesibilidade.

✅ A velocidade de carga é aceptable.

Na práctica profesional actual é habitual utilizar o inspector do navegador durante todo o desenvolvemento para analizar o HTML, o CSS, o JavaScript, os recursos cargados e o almacenamento local. Estas ferramentas permiten detectar e corrixir a maioría dos erros antes da publicación do sitio web.

## Exercicio práctico 1. Auditoría e validación dun proxecto web

### Obxectivo

Aplicar as técnicas de verificación estudadas sobre unha páxina web desenvolvida previamente.

### Material necesario

- Un proxecto realizado durante o curso.
- Google Chrome ou Mozilla Firefox.
- Acceso ao validador HTML do W3C.

### Tarefas

1. Abrir o proxecto nun navegador.
2. Validar o código HTML mediante o validador do W3C.
3. Corrixir os erros detectados.
4. Abrir as ferramentas de desenvolvedor (F12).
5. Revisar a consola e comprobar que non existen erros JavaScript.
6. Utilizar a pestana Network para verificar que todos os recursos cargan correctamente.
7. Executar unha auditoría Lighthouse desde Chrome DevTools.
8. Revisar as recomendacións obtidas.
9. Aplicar polo menos tres melloras.
10. Volver executar a auditoría para comprobar os resultados.

### Entrega

Elaborar un pequeno informe indicando:

- Erros HTML atopados.
- Problemas detectados na consola.
- Puntuación inicial de Lighthouse.
- Melloras realizadas.
- Puntuación final obtida.

---

## Exercicio práctico 2. Localización e corrección de erros

### Obxectivo

Utilizar o inspector do navegador para detectar e solucionar erros nunha páxina web.

### Código inicial

```html
<!DOCTYPE html>
<html lang="gl">
<head>
    <meta charset="UTF-8">
    <title>Exemplo con erros</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

<header>
    <h1>A miña web
</header>

<img src="logo.png">

<p id="mensaxe">Benvido á páxina</p>

<button id="btn">Premer</button>

<script>
    document.getElementById("boton").addEventListener("click", function() {
        alert("Ola mundo");
    });
</script>

</body>
</html>
```

### Tarefas

1. Abrir a páxina no navegador.
2. Inspeccionar a consola e identificar os erros mostrados.
3. Revisar a estrutura HTML mediante o inspector.
4. Corrixir as etiquetas incorrectas.
5. Corrixir os atributos que falten.
6. Corrixir os erros JavaScript.
7. Comprobar que a páxina funciona correctamente.

### Pistas

Neste exemplo existen erros relacionados con:

- Estrutura HTML.
- Accesibilidade de imaxes.
- Identificadores HTML.
- Código JavaScript.

### Resultado esperado

A páxina debe validarse correctamente e o botón debe mostrar unha mensaxe ao facer clic sen producir erros na consola.