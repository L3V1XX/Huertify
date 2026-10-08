<p align="center">
  <img src="assets/huertify_logo.png" alt="Logo de Huertify" width="260">
</p>

<h1 align="center">Huertify</h1>

<p align="center">
  <strong>Tu huerto, organizado y siempre a tiempo.</strong><br>
  App móvil multiplataforma para gestionar huertos urbanos y parcelas agrícolas pequeñas y medianas.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/estado-en%20dise%C3%B1o-yellow" alt="Estado: en diseño">
  <img src="https://img.shields.io/badge/Expo-React%20Native-000020?logo=expo" alt="Expo / React Native">
  <img src="https://img.shields.io/badge/PostgreSQL-Supabase-336791?logo=postgresql&logoColor=white" alt="PostgreSQL / Supabase">
  <img src="https://img.shields.io/badge/TFG-2%C2%BA%20DAM-2F6B3F" alt="TFG 2º DAM">
</p>

---

## 🌱 ¿Qué es Huertify?

**Huertify** es una aplicación móvil para la gestión integral de huertos urbanos y parcelas agrícolas pequeñas y medianas. Organiza el huerto por bancales, macetas o invernaderos, ofrece una ficha técnica de cada cultivo y avisa al usuario de cuándo regar y abonar.

Le acompaña su mascota, un **mapache** con un brote en la cabeza, que guía el onboarding, da consejos y acompaña al usuario por la interfaz.

## 👥 ¿Para quién es?

- **Quien empieza** con un huerto en casa (terraza, azotea o patio) y no sabe qué plantar ni cuándo cuidarlo.
- **Quien ya trabaja en el campo** con parcelas pequeñas o medianas y necesita una herramienta para no olvidar riegos, abonados y cosechas.

## 🧩 El problema

Se olvida cuándo regar o abonar y no siempre está claro cuándo plantar o cosechar cada cultivo. Hoy se resuelve con notas en el móvil, calendarios, hojas de cálculo o búsquedas en internet, todo disperso.

## ✨ Funcionalidades

### Primera versión (MVP)
- 🗺️ **Parcelas y terrenos:** crear y organizar parcelas, bancales, macetas o invernaderos y añadir cultivos a cada uno.
- 📋 **Ficha técnica por planta:** tiempos de germinación y cosecha, distancia de plantación, necesidades de sol y tipo de abonado.
- 🔔 **Recordatorios:** notificaciones de riego y abonado para cada cultivo.
- 🦝 **Usuario:** registro con onboarding guiado por la mascota, perfil personalizable y trofeos o logros.
- 📶 **Modo sin conexión:** caché local para zonas con mala cobertura.

### Siguientes fases
- 🤖 Asistente virtual con IA para dudas sobre plagas, riego o cultivo.
- 💡 Consejo del día adaptado a la época del año.
- 🌦️ Datos climáticos de la zona del usuario (lluvia, humedad…).

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|------------|
| Frontend | [Expo](https://expo.dev/) (React Native), una base de código para Android e iOS |
| Backend y base de datos | PostgreSQL, con [Supabase](https://supabase.com/) como opción |
| Almacenamiento local | AsyncStorage o MMKV (por evaluar) |
| Idiomas | i18n en la app con traducciones en base de datos |

## 🌿 Datos de cultivos (Aun por definir e investigar)

Huertify usa su propio catálogo de cultivos en la base de datos, construido a partir de fuentes abiertas y completado con datos adaptados a España (meses de siembra, germinación, riego y abonado).

| Fuente | Uso | Licencia |
|--------|-----|----------|
| [OpenFarm Crops Rescue](https://github.com/thefullnacho/openfarm-crops-rescue) | Sol, siembra, distancias, plantas compañeras | CC0 |
| [Growstuff](https://www.growstuff.org/) | Días medios hasta la cosecha | Ver condiciones de Growstuff |
| [Wikidata](https://www.wikidata.org/) | Nombres comunes en varios idiomas | CC0 |



## 📁 Estructura del repositorio

```
Huertify/
├── assets/            # Logo, icono y recursos gráficos
└── README.md
```

> La estructura de la app (Expo) se añadirá al comenzar el desarrollo.

## 🚧 Estado del proyecto

En fase de **análisis y documentación** (Hito 1). El desarrollo de la aplicación comenzará en hitos posteriores.

## 👤 Autor

**Jose Manuel Payán Gordillo**. Proyecto intermodular (TFG) de 2º de Desarrollo de Aplicaciones Multiplataforma (DAM).

## 📄 Licencia

© 2026 Jose Manuel Payán Gordillo. **Todos los derechos reservados.**

No se permite copiar, modificar, distribuir ni utilizar el código, la documentación, el logo ni la mascota sin autorización expresa del autor. Consulta el archivo [LICENSE](LICENSE).
