/**
 * Retourne le nombre le ^plus grand à partir d'une liste de nombres
 * @param nombres une liste de nombres
 * @returns le nombre le plus grand
 */
export default function plusGrandNombreDeux(...nombres: number[]){
    let max: number = 0
    for (let index = 0; index < nombres.length; index++) {
      if (nombres[index] > max) {
        max = nombres[index];
      }  
    }
    return max;
}