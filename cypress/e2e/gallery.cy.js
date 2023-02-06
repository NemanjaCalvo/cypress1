/// <reference types = "Cypress" />

describe("describe test", () => {
    it ("login test", () => {
        cy.visit('https://gallery-app.vivifyideas.com/');
        // cy.get(".nav-link").eq(1).click();
        // ne preporucuje se
        cy.get("a[href = '/login']").click();
        // cy.contains("Login");
        // ne preporucuje se
        cy.get("#email").type("bajicnemanja32@gmaill.com");
        cy.get("#password").type("nemanja94");
        cy.get(".btn").click();
        // cy.wait(2000);
        cy.get(".nav-link").should("have.length", 4);
        cy.url().should("not.contain", "/login");
        cy.get(".nav-link").eq(3).click();
    });
    it("register test", () => {
        cy.visit('https://gallery-app.vivifyideas.com/');
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "register");
        cy.get("#first-name").type("Nemanja");
        cy.get("#last-name").type("Bajic");
        cy.get("#email").type("bajicnemanja32@gmail.com");
        cy.get("#password").type("nemanja94");
        cy.get("#password-confirmation").type("nemanja94");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });
});
