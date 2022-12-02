import plusGrandNombreDeux from "./Exercice5"

describe("GIVEN : Je cherche le plus grand nombre", () => {
    describe("WHEN : Je donne les valeurs 5, 8, 90, 12, 35, 28", () => {
        it("THEN : Le plus grand nombre est 90", () => {
            expect(plusGrandNombreDeux(5, 8, 90, 12, 35, 28)).toBe(90)
        })
    })
})