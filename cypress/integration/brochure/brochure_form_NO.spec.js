const { ceil } = require("lodash");

const currentYear = new Date().getFullYear() - 13;
const day = 1;
const month = 1;
const firstName = 'Cypress';
const lastName = 'Testing';
const email = 'cypress@test.com';
const parentFirstName = 'Parent';
const parentLastName = 'Parent';
const parentPhone = '123456789';
const formType = 'brochure-ia-sf';
const formTypeCode = 'B_2';
const deliveryPreference = 'e-B';
const countryCode = 'NO';

describe('Brochure Form Test NO market', () => {

  it('Form successfully submits', () => {

    cy.intercept('GET', /ef.com\/wwen\/forms/).as('getForm')

    cy.visit('/no-no/brochure-request/')

    cy.wait('@getForm')

    cy.get(`#${formType}-form`);

    cy.get(`#${formType}-deliveryPreference-e-B`)
    .check({force: true})
    .should('have.value', deliveryPreference)  

    cy.get('input[name="firstName"]')
      .type('Cypress', {force: true})
      .should('have.value', firstName)

    cy.get('input[name="lastName"]')
      .type('Testing', {force: true})
      .should('have.value', lastName)

    cy.get(`#${formType}-day`)
      .select('1', {force: true})
      .should('have.value', day)

    cy.get(`#${formType}-month`)
      .select('1', {force: true})
      .should('have.value', month)

    cy.get(`#${formType}-year`)
      .select(`${currentYear}`, {force: true})
      .should('have.value', currentYear)

    // cy.wait(5000);
    
    cy.get('input[name="parentFirstName"]')
      .type('Parent', {force: true})
      .should('have.value', parentFirstName)

    cy.get('input[name="parentLastName"]')
      .type('Parent', {force: true})
      .should('have.value', parentLastName)
    
    cy.get('input[name="parentPhone"]')
      .type('123456789', {force: true})
      .should('have.value', parentPhone)

      cy.get('input[name="email"]')
      .type(`${email}`, {force: true})
      .should('have.value', email)

    cy.get('input[name="checkboxCombined"]')
      .check({force: true})
      .should('be.checked')

    cy.get('input[name="checkboxCombined_1"]')
      .check({force: true})
      .should('be.checked')

    cy.intercept('POST', /\/forms\/submit/ ).as('sendFormData')

    cy.get('button.ef-form-submit').click({force: true});

    cy.wait('@sendFormData', {timeout: 15000}).should(({ request, response }) => {
      expect(request?.body?.firstName).to.equal(firstName)
      expect(request?.body?.lastName).to.equal(lastName)
      expect(request?.body?.email).to.equal(email)
      expect(request?.body?.parentFirstName).to.equal(parentFirstName)
      expect(request?.body?.parentLastName).to.equal(parentLastName)
      expect(request?.body?.parentPhone).to.equal(parentPhone)

      expect(request?.body?.birthDate?.day).to.equal(day)
      expect(request?.body?.birthDate?.month).to.equal(month)
      expect(request?.body?.birthDate?.year).to.equal(currentYear)

      expect(request?.body?.countryCode).to.equal(countryCode)
      expect(request?.body?.hdnFormType).to.equal(formTypeCode)

      expect(response?.statusCode).to.equal(201)
      expect(response?.body?.message).to.equal('Record created successfully');
      
    })
  })
})
