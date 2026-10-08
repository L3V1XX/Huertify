# CONTEXTO TFG — Huertify

> Archivo vivo: se actualiza en cada sesión. Leer entero al empezar un chat nuevo.
> Última actualización: 2026-10-08

## 1. Datos generales
- **Proyecto:** TFG de grado superior
- **Ciclo:** DAM (Desarrollo de Aplicaciones Multiplataforma), 2º año, Andalucía. Grupo: DAM2
- **Alumno:** Jose Manuel Payán Gordillo
- **Equipo:** trabaja solo (las fichas del centro hablan de "equipo"; adaptar o consultar al profesor)
- **Centro / tutor / fechas de entrega:** _pendiente_ (el usuario irá pasando las tareas que mande el centro)
- **Fase actual:** definición del concepto y documentación (el código llegará mucho más adelante)

## 2. Concepto
- **Nombre:** Huertify
- **Propósito:** gestión integral de huertos urbanos y parcelas agrícolas pequeñas/medianas, con herramientas de espacio, seguimiento de cultivos, sincronización multiplataforma y comunidad.
- **Público objetivo (ambos perfiles, confirmado):** (1) gente nueva que quiere empezar en el campo/huerto; (2) personas que ya trabajan en ello y necesitan una herramienta para no olvidarse de regar, abonar, etc.

## 3. Identidad / mascota
- Mapache ilustrado estilo cartoon, alegre, con gorro de paja y pala de jardinería en la mano.
- Función: guiar el onboarding, dar consejos y acompañar en la interfaz.

## 4. Stack tecnológico
- **Frontend:** Expo (React Native), desarrollo unificado multiplataforma.
- **Backend:** PostgreSQL, con posibilidad de usar Supabase.
- **Offline:** persistencia offline con caché local (AsyncStorage o MMKV), pensada para zonas con mala cobertura. _Por investigar y probar más adelante._

## 5. Funcionalidades principales
1. **Gestión de parcelas y terrenos:** organización por bancales, macetas o invernaderos.
2. **Ficha técnica por planta:** tiempos de germinación y cosecha, distancia recomendada, sol, tipo de abonado.
3. **Notificaciones/recordatorios:** abonar, regar, etc.
4. **Datos climáticos (posible):** humedad, lluvias, etc. según la zona del usuario.
5. **Asistente virtual con IA:** chat de consultas rápidas sobre plagas, riegos o dudas del huerto.
6. **Consejo del día:** tips automáticos adaptados a la época del año.
7. **Cuenta y perfil de usuario:** registro, editar y personalizar perfil (datos, tipo de huerto, experiencia, avatar — detalle por definir).
7a. **Onboarding** guiado por la mascota (mapache) al registrarse.
7b. **Trofeos / logros** (gamificación) para el usuario (detalle por definir).
8. **Sincronización multiplataforma** (mencionada en el propósito; sin detallar aún).

**Fuera del MVP:** Comunidad (apartada por ahora; mencionada en el propósito original, se retomará si hay tiempo).

## 6. Decisiones tomadas
- Nombre: Huertify.
- Mascota: mapache cartoon con gorro de paja y pala.
- Comunidad queda fuera del MVP.
- Se incluye gestión y personalización de perfil, onboarding y trofeos/logros (Función 3 de la ficha S02).
- Usuario objetivo: tanto quien tiene huerto en casa como quien trabaja en el campo.
- Trabaja solo; grupo DAM2.
- Stack: Expo (React Native) + PostgreSQL/Supabase (Supabase como posibilidad, no cerrado).

## 6b. Hitos del centro
### H1 · S02 Ficha de idea y equipo (borrador en `H1_S02_Ficha_idea.md`)
- 3 funciones de la ficha: F1 parcelas/bancales/macetas + cultivos; F2 ficha técnica de planta + notificaciones de riego y abonado; F3 registro, onboarding con la mascota, perfil personalizable y logros.
- Apartados 5 y 6 rellenados con propuestas de Claude: pendiente de confirmar por el alumno + canal de coordinación con el profesor.
- Acciones antes de S03: revisar 3 apps de huertos; buscar fuente de datos de plantas.
- Nota: el enunciado dice "Heartfy"; el proyecto es Huertify.
- S03: contrastar con soluciones reales existentes (competencia).

## 6c. Identidad visual y repositorio
- Logo elegido: mapache con brote de dos hojas sobre círculo verde + rotulado propio "Huertify" (la "i" lleva una hoja). Archivos en `assets/` (logo con fondo, transparentes claro/oscuro, icono de app sin texto). Colores aún provisionales.
- README.md creado con logo, descripción, funcionalidades, stack, fuentes de datos y autor.

## 6d. Fuente de datos de cultivos (propuesta)
- Perenual descartado como fuente principal: plan gratis solo IDs 1–3000 (tomate 8758, patata 7409 fuera) y términos solo uso personal/no comercial.
- Propuesta: catálogo propio en PostgreSQL alimentado por OpenFarm Crops Rescue (CC0, 340 cultivos), Growstuff (días a cosecha; script `scripts/descargar_growstuff.mjs`, sin probar) y Wikidata (nombres multidioma), + datos España a mano (meses siembra Andalucía, germinación, riego/abonado).
- Multidioma: tabla `plantas` (datos neutros/códigos) + `plantas_traducciones` (planta_id, idioma, textos) + i18n en la app.

## 7. Pendiente / preguntas abiertas
- Requisitos del centro (rúbrica, plantilla de memoria, fechas, formato de entrega, tutor): se irán añadiendo.
- Alcance del MVP vs. funcionalidades futuras.
- Confirmar las 3 funciones del MVP y qué logros tendrá el usuario.
- Qué datos incluye el perfil de usuario (ubicación, tipo de huerto, experiencia...).
- Proveedor de datos climáticos y de la IA del asistente.
- Confirmar fuente de datos de plantas (propuesta en 6d) y probar el script de Growstuff.
- Modelo de usuarios/autenticación y de monetización (si aplica).
- Investigar AsyncStorage vs MMKV y estrategia de sincronización offline.

## 8. Historial de cambios
- 2026-10-01: creado el archivo con concepto, mascota, stack y funcionalidades principales.
- 2026-10-01: añadidos ciclo (DAM 2º, Andalucía), público objetivo, gestión de perfil; comunidad fuera del MVP.
- 2026-10-01: añadido H1/S02, trabaja solo (DAM2), usuario con ambos perfiles, trofeos/logros y perfil editable.
- 2026-10-04: añadidos personalización de perfil y onboarding con la mascota.
- 2026-10-04: ficha S02 rellenada con la versión del alumno; añadido nombre.
- 2026-10-04: Función 3 de la ficha = onboarding + perfil + logros; notificaciones pasan a la Función 2.
- 2026-10-08: logo/icono en assets/, README creado, propuesta de fuentes de datos de cultivos.
