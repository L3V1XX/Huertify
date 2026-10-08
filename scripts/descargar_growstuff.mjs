// descargar_growstuff.mjs
// Descarga todos los cultivos de Growstuff y los guarda en JSON para importarlos
// después a la base de datos de Huertify.
//
// Uso (Node 18 o superior):   node descargar_growstuff.mjs
// Salida:  growstuff_crops.json        -> listado de cultivos (API v1)
//          growstuff_crops_full.json   -> listado + datos de cosecha de cada cultivo
//
// Datos de Growstuff: revisa su licencia y atribúyelos (https://www.growstuff.org).

import { writeFile } from "node:fs/promises";

const BASE = "https://www.growstuff.org";
const PAUSA_MS = 1000; // 1 petición por segundo: no saturar su servidor
const HEADERS = {
  Accept: "application/vnd.api+json, application/json",
  "User-Agent": "Huertify-TFG/0.1 (proyecto educativo DAM)",
};

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJSON(url) {
  for (let intento = 1; intento <= 3; intento++) {
    const res = await fetch(url, { headers: HEADERS });
    if (res.ok) return res.json();
    console.warn(`  ${res.status} en ${url} (intento ${intento})`);
    await dormir(PAUSA_MS * 3 * intento);
  }
  throw new Error(`No se pudo descargar ${url}`);
}

// 1) Listado completo paginado (JSON:API). Se sigue links.next hasta el final.
async function descargarListado() {
  let url = `${BASE}/api/v1/crops?page[limit]=100&page[offset]=0`;
  const cultivos = [];
  while (url) {
    console.log("Página:", url);
    const json = await getJSON(url);
    for (const item of json.data ?? []) {
      cultivos.push({ id: item.id, ...item.attributes });
    }
    url = json.links?.next ?? null;
    if (url && url.startsWith("/")) url = BASE + url;
    await dormir(PAUSA_MS);
  }
  return cultivos;
}

// 2) Detalle de cada cultivo (/crops/<slug>.json): medianas de días hasta cosecha, etc.
async function descargarDetalles(cultivos) {
  const completos = [];
  for (const [i, c] of cultivos.entries()) {
    const slug = c.slug;
    if (!slug) continue;
    try {
      const d = await getJSON(`${BASE}/crops/${slug}.json`);
      completos.push({
        slug,
        nombre: d.name ?? c.name,
        nombre_cientifico: d.scientific_names?.[0]?.name ?? null,
        perenne: d.perennial ?? null,
        dias_primera_cosecha: d.median_days_to_first_harvest ?? null,
        dias_ultima_cosecha: d.median_days_to_last_harvest ?? null,
        vida_media_dias: d.median_lifespan ?? null,
        sol: d.sun_requirements || null,
        metodo_siembra: d.sowing_method || null,
        distancia_filas: d.row_spacing ?? null,
        ancho: d.spread ?? null,
        altura: d.height ?? null,
        wikipedia: d.en_wikipedia_url ?? null,
        plantaciones: d.plantings_count ?? 0,
      });
    } catch (e) {
      console.warn(`  Saltado ${slug}: ${e.message}`);
    }
    if ((i + 1) % 25 === 0) console.log(`  ${i + 1}/${cultivos.length} detalles`);
    await dormir(PAUSA_MS);
  }
  return completos;
}

const cultivos = await descargarListado();
await writeFile("growstuff_crops.json", JSON.stringify(cultivos, null, 2));
console.log(`Listado guardado: ${cultivos.length} cultivos`);

const completos = await descargarDetalles(cultivos);
await writeFile("growstuff_crops_full.json", JSON.stringify(completos, null, 2));
console.log(`Detalle guardado: ${completos.length} cultivos`);
