# Exercicio 7 — Formulario con Bootstrap e validación JavaScript

## Obxectivo

Crear un formulario completo utilizando Bootstrap 5 e a validación personalizada de JavaScript proporcionada por Bootstrap.

O formulario deberá validar os datos antes do envío e mostrar mensaxes de erro personalizadas en cada campo.

---

# Requisitos obrigatorios

## Tecnoloxías obrigatorias

O exercicio debe realizarse utilizando:

- HTML5
- Bootstrap 5
- JavaScript

---

# Estrutura do formulario

O formulario debe incluír:

## 1. Nome

Tipo:

```html
<input type="text">
```

Requisitos:

- Obrigatorio
- Mínimo 3 caracteres

Mensaxe de erro:

```text
Introduce un nome válido.
```

---

## 2. Apelidos

Tipo:

```html
<input type="text">
```

Requisitos:

- Obrigatorio
- Mínimo 2 apelidos separados por espazo

Mensaxe de erro:

```text
Introduce os dous apelidos.
```

---

## 3. Correo electrónico

Tipo:

```html
<input type="email">
```

Requisitos:

- Obrigatorio
- Formato correcto de email

Mensaxe de erro:

```text
Introduce un correo electrónico válido.
```

---

## 4. Contraseña

Tipo:

```html
<input type="password">
```

Requisitos:

- Obrigatoria
- Mínimo 8 caracteres

Mensaxe de erro:

```text
A contraseña debe ter mínimo 8 caracteres.
```

---

## 5. Idade

Tipo:

```html
<input type="number">
```

Requisitos:

- Obrigatorio
- Entre 18 e 99

Mensaxe de erro:

```text
A idade debe estar entre 18 e 99 anos.
```

---

## 6. Provincia

Tipo:

```html
<select>
```

Debe incluír como mínimo:

- A Coruña
- Lugo
- Ourense
- Pontevedra

Requisitos:

- Obrigatorio

Mensaxe de erro:

```text
Selecciona unha provincia.
```

---

## 7. Sexo

Tipo:

```html
<input type="radio">
```

Debe incluír:

- Home
- Muller
- Outro

Requisitos:

- Obrigatorio

Mensaxe de erro:

```text
Selecciona unha opción.
```

---

## 8. Linguaxes favoritas

Tipo:

```html
<input type="checkbox">
```

Debe incluír como mínimo:

- JavaScript
- PHP
- Python
- Java

Requisitos:

- Seleccionar polo menos unha opción

Mensaxe de erro:

```text
Selecciona polo menos unha linguaxe.
```

---

## 9. Comentarios

Tipo:

```html
<textarea>
```

Requisitos:

- Obrigatorio
- Mínimo 10 caracteres

Mensaxe de erro:

```text
Escribe un comentario máis completo.
```

---

## 10. Aceptación de condicións

Tipo:

```html
<input type="checkbox">
```

Requisitos:

- Obrigatorio

Mensaxe de erro:

```text
Debes aceptar as condicións.
```

---

# Botóns obrigatorios

O formulario debe incluír:

## Botón enviar

```html
<button type="submit">
```

Texto:

```text
Enviar formulario
```

---

## Botón limpar

```html
<button type="reset">
```

Texto:

```text
Limpar formulario
```

---

# Validación obrigatoria

Debe utilizarse:

- Clase `needs-validation`
- Propiedade `novalidate`
- Clase `is-invalid`
- Clase `is-valid`
- Elementos `invalid-feedback`

---

# JavaScript obrigatorio

O exercicio debe incluír:

- Captura do evento `submit`
- Uso de `checkValidity()`
- Cancelación do envío con:

```javascript
event.preventDefault();
```

- Engadir a clase:

```javascript
was-validated
```

---

# Aspecto visual

O formulario debe:

- Estar centrado na páxina
- Ter espazado entre elementos
- Utilizar compoñentes Bootstrap
- Ser responsive

---

# Entrega

Entregar:

- ficheiro `index.html`
- ficheiro `script.js`
- opcionalmente `style.css`

---

# Ampliación opcional

Para subir nota:

- Validar campos mediante expresións regulares
- Mostrar contador de caracteres no textarea
- Mostrar vista previa dos datos antes do envío
- Validar coincidencia de contraseña
- Engadir iconas Bootstrap
