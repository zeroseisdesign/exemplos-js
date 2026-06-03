# Plan: Landing Page - Tienda de Orfebrería

## 1. INFORMACIÓN DEL PROYECTO
- **Nombre:** OrfebreríaX (pendiente de definir)
- **Tipo:** Landing page para tienda online de prendas de orfebrería
- **Productos:** Sarcillos (pendientes), pulseras, collares, anillos, etc.
- **Stack:** HTML5 + CSS3 + JavaScript + Bootstrap 5

---

## 2. ESTRUCTURA DE ARCHIVOS

```
/
├── index.html              # Página principal
├── plan.dm                 # Este archivo de planificación
├── assets/
│   ├── css/
│   │   └── estilos.css     # Estilos personalizados
│   ├── js/
│   │   └── script.js       # JS personalizado
│   ├── img/
│   │   ├── logo.png        # Logotipo de la tienda
│   │   ├── hero-1.jpg      # Imagen 1 para carrusel
│   │   ├── hero-2.jpg      # Imagen 2 para carrusel
│   │   ├── hero-3.jpg      # Imagen 3 para carrusel
│   │   └── hero-4.jpg      # Imagen 4 para carrusel
│   └── fonts/              # (opcional) tipografías locales
```

---

## 3. PALETA DE COLORES (CÁLIDOS)

| Color           | Hex       | Uso                          |
|-----------------|-----------|------------------------------|
| Dorado/Oro      | #C8963E   | Acentos, botones, detalles   |
| Marrón oscuro   | #4A2C2A   | Textos principales           |
| Crema/Beige     | #F5EDE0   | Fondo de la página           |
| Terracota       | #B85C4A   | Hover, active, detalles      |
| Blanco roto     | #FFF8F0   | Fondos de tarjetas           |
| Negro suave     | #2D2D2D   | Textos secundarios           |

---

## 4. ESTRUCTURA DE LA PÁGINA (index.html)

### 4.1 HEADER
- **Logo** a la izquierda (imagen o texto estilizado)
- **Navbar** a la derecha con enlaces:
  - Inicio
  - Productos (para futura página)
  - Galería
  - Contacto
- Bootstrap navbar, fijo arriba, fondo oscuro/marrón con texto dorado
- Efecto: que el navbar se haga más opaco al hacer scroll (animación JS)

### 4.2 HERO / CARRUSEL
- Carrusel Bootstrap con 4 diapositivas
- Cada diapositiva: imagen de fondo + texto superpuesto
- Texto: nombre de categoría (Sarcillos, Pulseras, Collares, Anillos)
- Llamada a la acción sutil (botón "Ver colección")
- Transiciones suaves entre slides
- Flechas de navegación e indicadores

### 4.3 SECCIÓN "SOBRE NOSOTROS" (opcional pero recomendada)
- Breve texto sobre la orfebrería artesanal
- Imagen decorativa
- Diseño en dos columnas (Bootstrap grid)

### 4.4 SECCIÓN DE PRODUCTOS DESTACADOS
- Grid de tarjetas (Bootstrap cards)
- 4-6 productos con imagen, nombre y precio
- Efecto hover: sombra + escala suave

### 4.5 FOOTER
- Fondo oscuro/marrón
- Texto dorado
- Derechos reservados
- Iconos de redes sociales (placeholder)

---

## 5. ANIMACIONES A IMPLEMENTAR

### Con CSS (transiciones + keyframes)
1. **Navbar al hacer scroll** - cambio de fondo de transparente a sólido
2. **Tarjetas de productos** - scale(1.05) + sombra al hover
3. **Botones** - cambio de color gradual, borde brillante
4. **Títulos** - fade-in desde abajo al hacer scroll (usando Intersection Observer)
5. **Carrusel** - transiciones CSS nativas de Bootstrap

### Con JavaScript
1. Intersection Observer para animar elementos al hacer scroll
2. Smooth scroll para enlaces de navegación
3. Efecto de escritura lenta en el hero (opcional)

---

## 6. ORDEN DE IMPLEMENTACIÓN

### Paso 1: Estructura base
- [ ] Crear carpeta de proyecto y estructura de archivos
- [ ] index.html con HTML semántico (header, main, footer)
- [ ] Enlazar Bootstrap CSS y JS (CDN)
- [ ] Enlazar CSS propio y JS propio
- [ ] Crear navbar responsive con logo + menú

### Paso 2: Hero / Carrusel
- [ ] Añadir carrusel Bootstrap con 4 slides
- [ ] Configurar imágenes placeholder
- [ ] Añadir textos y botones en cada slide
- [ ] Personalizar colores de los controles

### Paso 3: Secciones de contenido
- [ ] Sección "Sobre nosotros" (opcional)
- [ ] Sección de productos destacados con cards
- [ ] Footer con información de contacto

### Paso 4: Estilo y animaciones (estilos.css)
- [ ] Definir paleta de colores cálidos
- [ ] Estilizar navbar (fondo, hover, scroll)
- [ ] Estilizar carrusel (textos, botones)
- [ ] Estilizar cards (hover, sombras)
- [ ] Estilizar footer
- [ ] Animar títulos con fade-in

### Paso 5: JavaScript (script.js)
- [ ] Intersection Observer para animaciones al scroll
- [ ] Cambio de clase en navbar al hacer scroll
- [ ] Smooth scroll en enlaces internos
- [ ] (Opcional) Animación de escritura en hero

### Paso 6: Pulido final
- [ ] Probar responsive (móvil, tablet, escritorio)
- [ ] Ajustar espaciados y tipografía
- [ ] Verificar contraste y accesibilidad

---

## 7. DEPENDENCIAS

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

Sin otras dependencias externas. Todo el CSS y JS adicional será propio.

---

## 8. NOTAS

- Usar Google Fonts (ej: "Playfair Display" para títulos, "Lato" para textos)
- Imágenes del carrusel: mínimo 1920x1080px
- El logotipo debe tener fondo transparente (PNG)
- Priorizar rendimiento: imágenes optimizadas (WebP si es posible)
- Colores cálidos = sensación de lujo y artesanía
