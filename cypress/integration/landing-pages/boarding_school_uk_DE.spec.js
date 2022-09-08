
describe('LP Test /smlp/bscl/boarding-school-uk/', () => {

  it('Page successfully loads', () => {

    cy.visit('/de/smlp/bscl/boarding-school-uk/')

    cy.get(`#download-a-brochure`).should('exist');
  })
})
