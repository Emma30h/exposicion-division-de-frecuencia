# División de Frecuencia: piezas para reutilizar

Presentación «División de Frecuencia», preparada en noviembre de 2026.
Publicada en https://exposicion-division-de-frecuencia.vercel.app (la guía del público está en `/guia.html`).

Este archivo dice dónde está cada pieza para poder copiarla a otra presentación. Las líneas de `index.html` son de la versión del 2026-11-03 y pueden moverse si se edita el archivo: buscar por el comentario.

## Lo que esta exposición suma al universo

| Pieza | Dónde | Sirve para |
|---|---|---|
| Réplica del SAE WEB con carga animada | `index.html`, comentario «réplica del SAE WEB» (JS, línea ~696) y CSS «réplica SAE WEB» (~136) | Cualquier explicación de carga de hechos: teléfono, calle, geolocalización automática, Comuna (UT), relato, tipificación. |
| Desplegable de tipificación | Mismo bloque, `TIPIF` y `autocompletar` | Tiene los tipos y subtipos reales del SAE WEB (sacados del CSV de sucesos). |
| personal tech en modo oscuro dentro del RugGear | JS «personal tech dentro del RugGear» (~881), CSS «RugGear con personal tech» (~260) | Pantallas Canales y Resumen como en el equipo real. La Agenda Móvil tiene la versión clara (login, formulario, históricos). |
| Mapa de los 234 barrios por UT | `media/mapa-frec.js` + `buildMap` / `setMap` (JS ~863) | Pintar barrios por UT, frecuencia o zona y encenderlos por pasos. Cada barrio trae su UT (`u`, 24 = 24 bis) y hay etiquetas por UT. |
| Video de fondo que alterna clips | JS «video de fondo» (~915), CSS «cabina / radio» (~112) | Láminas con video a pantalla completa, degradado para leer y etiqueta de qué se ve. Se carga recién al llegar a la lámina. |
| Pasos que se encienden (`data-f`) | Motor de navegación (JS ~988) | Cada → muestra el paso siguiente; `.now` marca el actual. Las láminas animadas se enganchan con `HOOKS[id]`. |
| Modo celular automático | CSS «modo documento» (~425), `docInit` / `autoplay` | En pantallas angostas las láminas pasan a ser una página; las animaciones arrancan al llegar con el scroll. |
| Guía en vivo + QR | `guia.html`, `config-vivo.js`, JS «guía en vivo (expositor)» (~1158) | El mismo esquema de la Agenda Móvil, con canal propio. Ver README. |
| PDF del material | `print/material.html` | A4 oscuro con imágenes planas capturadas de la propia presentación. |
| Afiche QR | `print/afiche-qr.html` | A4 blanco y negro para láser. Solo cambia `URL_GUIA` y los textos. |

## Datos ya armados

- **Frecuencias RugGear:** NORTE 1 - UT 15 · NORTE 2 - UT 14, 23, 24 BIS · ESTE 1 - UT 7, 9, 13, 17 · ESTE 2 - UT 6, 8 · SUR 1 - UT 5, 12, 21 · SUR 2 - UT 4, 11 · CENTRO - UT 2, 3 · OESTE - UT 10, 19, 20, 22. Colores en `--f1` … `--f8`.
- **En el SAE WEB** la UT figura en el campo Comuna como «DISTRITO N».
- **Tiempos:** el reloj corre desde que el vecino explica su situación (no el saludo); 1 min la cabina, 1 a 3 min hasta asignar el móvil.

## Videos

Los originales están en `Videos\Exposicion DMCA 16-10-2026\Material Fotografico y Filmico DMCA` (4K HDR del iPhone). Para la web se convierten con el ffmpeg de `imageio-ffmpeg`:

```bash
ffmpeg -i ORIGINAL.MOV -an -vf "zscale=w=1280:h=720:tin=arib-std-b67:min=bt2020nc:pin=bt2020:rin=tv:t=linear:npl=203,format=gbrpf32le,zscale=p=bt709,tonemap=tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p,eq=brightness=-0.07:contrast=0.92:saturation=0.8" -r 25 -c:v libx264 -preset slow -crf 31 -pix_fmt yuv420p -movflags +faststart salida.mp4
```

Sin el tonemap se ven lavados. **Regla:** el personal civil no aparece mirando a la cámara; usar tomas de espaldas.

## Pruebas

- La fluidez se mide con Chrome automatizado (puppeteer-core de `Estadisticas Ojos en Alerta/scripts/node_modules`), no con el panel del navegador de la app: si está oculto, frena las animaciones.
- Revisar: errores de consola, elementos que se salen de la lámina, pasos futuros que se encienden antes de tiempo y navegación rápida (flechas sin esperar).
- La animación de entrada (`@keyframes rise`) no debe fijar `opacity` en el final, porque pisa el atenuado de los pasos.
