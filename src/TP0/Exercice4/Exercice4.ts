/**
 * Retourne le plus grand nombre dans une pitite phrase
 * @param nombre1 un nombre
 * @param nombre2 un autre nombre
 * @param nombre3 encore un nombre
 * @returns le plus grand nombre
 */
export default function plusGrandNombre(
  nombre1: number,
  nombre2: number,
  nombre3: number
): string {
  let plusGrandNombre: number = nombre1;
  if (nombre2 > plusGrandNombre) {
    plusGrandNombre = nombre2;
  }
  if (nombre3 > plusGrandNombre) {
    plusGrandNombre = nombre3;
  }
  return `Le plus grand nombre est ${plusGrandNombre} <3`
}