

describe('LP Test smlp/pscl/private-school-uk/', () => {

  it('Page successfully loads', () => {

    cy.visit('/de/smlp/pscl/private-school-uk/')

    cy.get(`#download-a-brochure`).should('exist');
  })
})
