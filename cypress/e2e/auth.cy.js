/* eslint-disable no-undef */
import { faker } from "@faker-js/faker";

describe("create new user", () => {
	it("should create user with successfully", () => {

        const user = {
		name: faker.lorem.words(1),
        email: faker.internet.email(),
        password: "Caio123*",   
        image: "https://5934488p.ha.azioncdn.net/capas-livros/9788580570458-david-nicholls-um-dia-3826118685.jpg",
        readingGoals: 3
		};
		cy.visit("http://localhost:3000/signup");

		cy.get("input[placeholder=nome]").type(user.name);
		cy.get("input[placeholder=Email").type(user.email);
        cy.get("input[placeholder=Foto").type(user.image);
        cy.get("input[placeholder=senha").type(user.password);
		cy.get("[data-cy=submit]").click();
		
		cy.url().should("equal", "http://localhost:3000/favoriteGenre");
	});
	it("should make login with successfully", () => {

        const user = {
        email: "caiovitor@hotmail.com",
        password: "Caio123*"
		};
		cy.visit("http://localhost:3000/signin");

		cy.get("input[placeholder=Email").type(user.email);
      
        cy.get("input[placeholder=senha").type(user.password);
		cy.get("[data-cy=submit]").click();
		
		cy.url().should("equal", "http://localhost:3000/timeline");
	});
});