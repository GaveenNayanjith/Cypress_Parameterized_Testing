describe('Parameterized tests with Cypress', ()=> {

  beforeEach(function(){
    cy.fixture('names').then((names) =>{
      this.names = names
    })
  })

  it('Check for Dynamic click', function() {
    cy.visit('https://forms.gle/djBqu37E4hwjSF4a8')
    cy.wait(4000)
    cy.xpath('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[1]/input').should('be.visible').type(this.names.fname)
    cy.xpath('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[1]/input').should('be.visible').type(this.names.lname)
  })
})