import plusGrandNombre from "./Exercice4";

describe("GIVEN : Je cherche le plus grand nombre", () => {
    describe("WHEN : Je donne les valeurs 5, 8 et 90", () => {
        it("THEN : Le plus grand nombre est 90", () => {
            expect(plusGrandNombre(5, 8, 90)).toBe("Le plus grand nombre est 90 <3")
        })
    })
})