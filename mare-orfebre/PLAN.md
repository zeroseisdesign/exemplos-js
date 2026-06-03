# Plan: Landing Page - ZESTLIFE C.A. (Diseño Web)

## 1. INFORMACIÓN DEL PROYECTO
- **Empresa:** ZESTLIFE C.A.
- **Tipo:** Landing page para empresa de diseño y desarrollo web
- **Servicios:** Diseño, Construcción, Hospedaje, Mantenimiento
- **Stack:** HTML5 + CSS3 + JavaScript + Bootstrap 5
- **Referencia:** Diseño en `ZESTLIFE.pen`

---

## 2. ESTRUCTURA DE ARCHIVOS

```
/
├── index.html                  # Página principal
├── PLAN.md                     # Este archivo de planificación
├── assets/
│   ├── css/
│   │   └── estilos.css         # Estilos personalizados
│   ├── js/
│   │   └── script.js           # JS personalizado
│   ├── img/
│   │   ├── logo.png            # Logotipo ZESTLIFE
│   │   ├── diseno-1.jpg        # Imagen Diseño 1
│   │   ├── diseno-2.jpg        # Imagen Diseño 2
│   │   ├── diseno-3.jpg        # Imagen Diseño 3
│   │   └── diseno-4.jpg        # Imagen Diseño 4
```

---

## 3. PALETA DE COLORES (DEL DISEÑO)

| Color           | Hex       | Uso                          |
|-----------------|-----------|------------------------------|
| Mauve/Lila      | #C990CC   | Header, footer, acentos      |
| Gris claro      | #D1D1D6   | Fondo galería                |
| Negro           | #000000   | Textos principales           |
| Blanco          | #FFFFFF   | Fondo general                |

---

## 4. ESTRUCTURA DE LA PÁGINA (index.html)

### 4.1 HEADER
- **Logo** a la izquierda (imagen)
- **Navbar** con enlaces:
  - Inicio
  - Diseño
  - Construcción
  - Hospedaje
  - Mantenimiento
- Fondo color mauve (#C990CC)
- Fuente: Inter

### 4.2 HERO / GALERÍA DE PROYECTOS
- Fondo gris claro (#D1D1D6)
- Grid de 4 proyectos de diseño web (layout asimétrico como en el diseño):
  - Proyecto 1: grande izquierda
  - Proyecto 2: grande derecha (arriba)
  - Proyecto 3: mediano izquierda (abajo)
  - Proyecto 4: pequeño derecha (abajo)
- Cada proyecto: imagen + overlay con nombre

### 4.3 SECCIÓN DE SERVICIOS
- 4 tarjetas: Diseño, Construcción, Hospedaje, Mantenimiento
- Iconos + descripción breve
- Efecto hover

### 4.4 FOOTER
- Fondo mauve (#C990CC)
- Copyright: "ZESTLIFE C.A."
- Email: VENTAS@ZESTLIFE.COM
- Teléfono

---

## 5. ANIMACIONES

1. Navbar con sombra al hacer scroll
2. Tarjetas con hover (scale + sombra)
3. Fade-in de elementos al hacer scroll (Intersection Observer)
4. Transiciones suaves en galería

---

## 6. ORDEN DE IMPLEMENTACIÓN

### Paso 1: Estructura base
- [ ] index.html con HTML semántico
- [ ] Enlazar Bootstrap CSS/JS (CDN)
- [ ] Navbar responsive con logo + menú

### Paso 2: Hero / Galería
- [ ] Grid asimétrico con imágenes de proyectos
- [ ] Overlay con nombres

### Paso 3: Servicios
- [ ] 4 tarjetas de servicios con iconos
- [ ] Efectos hover

### Paso 4: Footer
- [ ] Copyright, email, teléfono

### Paso 5: Estilos (estilos.css)
- [ ] Paleta de colores del diseño
- [ ] Estilos de navbar, galería, servicios, footer

### Paso 6: JavaScript (script.js)
- [ ] Intersection Observer
- [ ] Scroll suave
- [ ] Efecto navbar

---

## 7. DEPENDENCIAS

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

Google Fonts: Inter (para coincidir con el diseño)

---

## 8. NOTAS
- Coincidir exactamente con los colores del diseño Pencil
- Las imágenes de la galería usan las importadas del diseño
- Diseño responsive (mobile-first)
