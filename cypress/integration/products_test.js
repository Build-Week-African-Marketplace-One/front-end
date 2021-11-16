describe("Products Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/products");
    });
    const productContainer = () => cy.get("div[className=products-container]");

    it("Proper elements showing", () => {
        productContainer().should("exist");
    })





})

















































