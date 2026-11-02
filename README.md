# exposicion-division-de-frecuencia

Exposición «División de Frecuencia» de la Dirección Monitoreo Cordobeses en Alerta (Policía de la Provincia de Córdoba): funciones del operador de cabina y del radio operador, las 8 frecuencias RugGear según la UT y los tiempos de carga y asignación.

Publicada en https://exposicion-division-de-frecuencia.vercel.app (la guía del público está en `/guia.html`).

Abrí `index.html` en el navegador. Se avanza con ← → (o deslizando en pantallas táctiles) y la tecla F pone la pantalla completa. En celulares las láminas pasan a ser una página con scroll y las animaciones arrancan solas al llegar a cada una.

## Contenido

| Archivo | Qué es |
|---|---|
| `index.html` | La presentación del expositor: 11 láminas, la réplica del SAE WEB y la de personal tech en el RugGear, el QR de la portada y el emisor de la guía en vivo. |
| `guia.html` | La guía del público para el celular: una tarjeta conceptual por lámina que sigue al expositor. |
| `config-vivo.js` | Supabase, el canal, la clave pública y la clave del expositor cifrada con la contraseña. |
| `Division de Frecuencia - Cordobeses en Alerta.pdf` | El material para descargar (botón al final de la presentación y de la guía). |
| `print/material.html` | El HTML del que sale el PDF, con sus imágenes en `print/img/`. |
| `media/mapa-frec.js` | Los 234 barrios del programa con su UT, para el mapa de frecuencias. |
| `media/video/` | Videos de fondo de las láminas de cabina y radio (MP4 1280×720 sin audio, con su imagen fija). |
| `media/fotos/sala.jpg` | Foto de la sala para la portada. |
| `media/ruggear-crop.png`, `media/logo_ojo.png` | El equipo RugGear y el logo. |
| `vendor/` | Supabase JS y qrcode-generator, copiados para no depender de otros servidores. |

Los casos que se cargan en la réplica del SAE WEB son ficticios, con fines de capacitación.

## Guía en vivo

- Quien expone toca **Activar guía en vivo** (o la tecla G) y escribe la contraseña **Cordobeses**. Queda guardada en esa computadora.
- Cada cambio de lámina y de paso se manda por Supabase Realtime (canal `dmca-division-frecuencia`), firmado con ECDSA P-256. La guía solo acepta mensajes firmados.
- La clave privada está cifrada en `config-vivo.js` (PBKDF2 + AES-GCM). La copia sin cifrar vive en `_privado/`, que no se versiona ni se publica.
- `VER` tiene que ser igual en `index.html` y `guia.html`; hay que subirla si cambian las láminas.
- El proyecto de Supabase (plan gratis) se pausa tras unos 7 días sin uso: reactivarlo antes de exponer.

## Regenerar el PDF

Con la presentación servida en local, imprimir `print/material.html` a PDF A4 con fondo (Chrome o Edge headless, `--print-to-pdf --no-pdf-header-footer`). Las imágenes tienen que ser planas (JPEG o PNG sin transparencia) para que se vean en cualquier visor.

## Publicar

```bash
vercel deploy --prod --yes
```
