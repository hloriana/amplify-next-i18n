

describe('LP Test /smlp/ib/ib-diploma-us/', () => {

  it('Page successfully loads', () => {

    cy.visit('/de/smlp/ib/ib-diploma-us/')

    cy.get(`#download-a-brochure`).should('exist');
  })
})
