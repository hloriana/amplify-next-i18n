
const currentYear = new Date().getFullYear() - 15;
const day = 1;
const month = 1;
const firstName = 'Cypress';
const lastName = 'Testing';
const email = 'cypress@test.com';
const mobilePhone = '1241241124112';
const formType = 'contactus-ia-sf';
const formTypeCode = 'CU';
const comments = 'Test';

const countryCode = 'GB';

describe('Contact Us Form Test EN market', () => {

  it('Form successfully submits', () => {
    // cy.visit('https://www.ef.se/highschool/brochure/')
    cy.intercept('GET', /ef.com\/wwen\/forms/).as('getForm')

    cy.visit('/en/contact-us/')

    cy.wait('@getForm')

    cy.get(`#${formType}-form`);
    cy.get('input[name="firstName"]')
      .type('Cypress', {force: true})
      .should('have.value', firstName)

    cy.get('input[name="lastName"]')
      .type('Testing', {force: true})
      .should('have.value', lastName)
    
    cy.get(`#${formType}-countryCode`)
      .select(`${countryCode}`, {force: true})
      .should('have.value', countryCode)  

    cy.get('input[name="mobilePhone"]')
      .type('1241241124112', {force: true})
      .should('have.value', mobilePhone)

    cy.get('input[name="email"]')
      .type('cypress@test.com', {force: true})
      .should('have.value', email)

    cy.get(`#${formType}-comments`)
      .type('Test', {force: true})
      .should('have.value', comments)

    cy.intercept('POST', /\/forms\/submit/ ).as('sendFormData');

    cy.get('button.ef-form-submit').click({force: true});    

    cy.wait('@sendFormData', {timeout: 15000}).should(({ request, response }) => {
      expect(request?.body?.firstName).to.equal(firstName)
      expect(request?.body?.lastName).to.equal(lastName)
      expect(request?.body?.email).to.equal(email)
      expect(request?.body?.mobilePhone).to.equal(mobilePhone)

      expect(request?.body?.comments).to.equal(comments)

      expect(request?.body?.countryCode).to.equal(countryCode)
      expect(request?.body?.hdnFormType).to.equal(formTypeCode)

      expect(response?.statusCode).to.equal(201)
      expect(response?.body?.message).to.equal('Record created successfully');
      
    })
  })
})
