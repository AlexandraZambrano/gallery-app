describe('Tests the home page and form page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Close Modal', () => {
    cy.get('.image-content').click({ multiple: true, force:true })
    cy.get('.close-modal-btn').click({ multiple: true, force: true })
  })

  
  describe('empty upload form', () => {  
    it('should navigate to the empty upload form', () => {
    cy.get('.add-new-btn').click()
      cy.get('.title-input').type('New Image')
    })
  })

})