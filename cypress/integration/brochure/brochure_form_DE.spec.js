
const currentYear = new Date().getFullYear() - 15;
const day = 1;
const month = 1;
const firstName = 'Cypress';
const lastName = 'Testing';
const email = 'cypress@test.com';
const mobilePhone = '+123456789';
const formType = 'brochure-ia-sf';
const formTypeCode = 'B_2';
const address = 'Test address';
const houseNumber = 11;
const postalCode = 1234;
const city = 'Hamburg';
const countryCode = 'DE';
const deliveryPreference = 'F-B';

describe('Brochure Form Test DE market', () => {

  it('Form successfully submits', () => {

    cy.intercept('GET', /ef.com\/wwen\/forms/).as('getForm')

    cy.visit('/de/brochure-request/')

    cy.wait('@getForm')

    cy.get(`#${formType}-form`);
    cy.get('input[name="firstName"]')
      .type('Cypress', {force: true})
      .should('have.value', firstName)

    cy.get('input[name="lastName"]')
      .type('Testing', {force: true})
      .should('have.value', lastName)
      
    cy.get(`#${formType}-deliveryPreference-F-B`)
      .check({force: true})
      .should('have.value', deliveryPreference)  

    cy.get('input[name="addressLine1"]')
      .type(`${address}`, {force: true})
      .should('have.value', address)

    cy.get('input[name="houseNumber"]')
      .type(`${houseNumber}`, { force: true })
      .should('have.value', houseNumber)

    cy.get('input[name="postalCode"]')
      .type(`${postalCode}`, { force: true })
      .should('have.value', postalCode)
        
    cy.get('input[name="city"]')
      .type('Hamburg', { force: true })
      .should('have.value', city)

    cy.get('input[name="mobilePhone"]')
      .type(`${mobilePhone}`, {force: true})
      .should('have.value', mobilePhone)

    cy.get('input[name="email"]')
      .type(`${email}`, {force: true})
      .should('have.value', email)

    cy.get(`#${formType}-day`)
      .select('1', {force: true})
      .should('have.value', day)

    cy.get(`#${formType}-month`)
      .select('1', {force: true})
      .should('have.value', month)

    cy.get(`#${formType}-year`)
      .select(`${currentYear}`, {force: true})
      .should('have.value', currentYear)

    cy.get('input[name="checkboxCombined"]')
      .check({force: true})
      .should('be.checked')

    cy.intercept('POST', /\/forms\/submit/ ).as('sendFormData')

    cy.get('button.ef-form-submit').click({force: true});

    cy.wait('@sendFormData', {timeout: 15000}).should(({ request, response }) => {
      expect(request?.body?.firstName).to.equal(firstName)
      expect(request?.body?.lastName).to.equal(lastName)
      expect(request?.body?.email).to.equal(email)
      expect(request?.body?.mobilePhone).to.equal(mobilePhone)

      expect(request?.body?.birthDate?.day).to.equal(day)
      expect(request?.body?.birthDate?.month).to.equal(month)
      expect(request?.body?.birthDate?.year).to.equal(currentYear)

      expect(request?.body?.countryCode.toUpperCase()).to.equal(countryCode)
      expect(request?.body?.hdnFormType).to.equal(formTypeCode)

      expect(response?.statusCode).to.equal(201)
      expect(response?.body?.message).to.equal('Record created successfully');
      
    })
  })
})
