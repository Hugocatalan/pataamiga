# PataAmiga — landing de veterinaria y pet shop

## Estructura
- `index.html`: estructura y contenido.
- `css/styles.css`: estilos responsive.
- `js/main.js`: menú móvil, enlaces de WhatsApp, mapa y pequeñas animaciones.

## Cómo probar
Abrí `index.html` en el navegador. Se recomienda usar una extensión como Live Server en VS Code durante el desarrollo.

## Antes de publicar
1. En `js/main.js`, cambiá `SITE_CONFIG.whatsapp`, `phoneLabel` y `addressQuery` por los datos reales.
2. Cambiá la dirección, horarios y textos provisionales del HTML.
3. Confirmá qué servicios ofrece realmente la veterinaria.
4. Reemplazá las fotos de stock por fotografías propias cuando estén disponibles. Las imágenes externas requieren conexión a internet.
5. Revisá que los enlaces y los permisos de uso de imágenes sean adecuados para el sitio final.

El nombre PataAmiga, el logo textual, los datos de contacto y los horarios son provisionales.


Imágenes locales: carpeta `assets/`. La galería usa las imágenes que compartiste; podés cambiarlas por otras conservando los nombres o actualizando las rutas en `index.html`.

La imagen `assets/hero-pataamiga.png` es la imagen generada para el fondo principal (hero) de PataAmiga.

Corrección: el hero principal es una única imagen completa (`assets/hero-pataamiga.png`) que ya incluye encabezado visual, textos, botones y tarjetas. No se debe superponer contenido HTML sobre esa imagen.


FUNCIONALIDAD INTEGRADA
- Menú adaptable con estado activo.
- Tarjetas de servicios que abren detalles y permiten solicitar turno.
- Formulario de solicitud de turno que prepara el mensaje en WhatsApp.
- Enlaces de WhatsApp, productos y mapa configurables en js/main.js.
- La solicitud no reserva automáticamente; se coordina por WhatsApp.

ANTES DE PUBLICAR
Editá SITE_CONFIG en js/main.js con el WhatsApp, teléfono y dirección reales. También reemplazá los textos de ejemplo del contacto.
