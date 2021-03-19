
describe('Form App', () => {
    //helper functions
    const usernameInput = () => cy.get('[name="username"]')
    const emailInput = () => cy.get('[name="email"]')
    const passwordInput = () => cy.get('[name="password"]')

    const checkbox = () => cy.get(':nth-child(6) > input')
    const submitButton =() => cy.get('button')

    const testName = 'JohnSmith42'
    const testEmail ="John.Smith@Lambda.com"
    const testPassword = 'password' 
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
      })
    
      it('renders properly', () => {
        usernameInput()
        .should('exist')
        .should('have.value', '')

        emailInput()
        .should('exist')
        .should('have.value', '')

        passwordInput()
        .should('exist')
        .should('have.value', '')

        checkbox()
        .should('exist')
        .should('not.be.checked')

        submitButton()
        .should('exist')
        .should('be.disabled')
      })

      it('can input properly', ()=>{
          usernameInput()
          .type(testName)
          .should('have.value', testName)

          emailInput()
          .type(testEmail)
          .should('have.value', testEmail)

          passwordInput()
          .type(testPassword)
          .should('have.value', testPassword)
        
          checkbox()
          .check()
          .should('be.checked')
          .uncheck()
          .should('not.be.checked')

          submitButton()
          .should('not.be.disabled')
          .click()

          cy.get('.users > .sc-bdfBwQ').should('exist')

          usernameInput()
          .should('have.value', '')

          emailInput()
          .type(testEmail)
          .should('have.value', testEmail)

          passwordInput()
          .type(testPassword)
          .should('have.value', testPassword)
        
          submitButton()
          .should('be.disabled')

      })
    
})