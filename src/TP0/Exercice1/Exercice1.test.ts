import hello from "./Exercice1";

describe("GIVEN : Je sollicite la méthode hello", () => {
    describe("WHEN : Je donne le prénom Alex en paramètre", () => {
        it("THEN : On affiche 'Bonjour Alex' dans la console", () => {
            const spy = jest.spyOn(console, "log")
            hello("Alex")
            expect(spy).toHaveBeenCalledWith("Bonjour Alex")
        })
    })

})