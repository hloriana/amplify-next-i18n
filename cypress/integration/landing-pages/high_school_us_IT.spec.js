

describe('LP Test /it-it/smlp/hs/high-school-us/', () => {

  it('Page successfully loads', () => {

    cy.visit('/it-it/smlp/hs/high-school-us/')

    cy.get(`#download-a-brochure`).should('exist');
  })
})
