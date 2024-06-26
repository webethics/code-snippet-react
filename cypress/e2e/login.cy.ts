describe("Login Test", () => {
    it("login page visible", () => {
        // Visit the login page
        cy.visit("http://localhost:4173/auth"); // Replace with your actual login page URL
        cy.contains("h1", "Sign in").should("be.visible");
    });

    it("should fill in email and password and submit the form", () => {
        // Visit the login page again
        cy.visit("http://localhost:4173/auth"); // Replace with your actual login page URL
        
        // Target the input with id=email and type in it
        cy.get('#email').type('test@example.com'); // Replace with your test email
        
        // Target the input with id=password and type in it
        cy.get('#password').type('password123'); // Replace with your test password
        
        // Click the button of type submit
        cy.get('button[type="submit"]').click();
    });
});
