import bonjour from ".";

describe("Je vais tester bonjour", () => {
    it("Le fonction doit retourner 'bonjour'", () => {
        expect(bonjour()).toBe("Bonjour");
    });
});
