import { WORK } from '../../src/content/data'

describe('main page', () => {
  it('renders main page', () => {
    cy.visit('/')
  })

  describe('on visit main page', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('renders headings', () => {
      cy.get('#greeting').should('exist')
      cy.get('h1').should('have.text', 'Hi! I’m Dolf Barr ')

      cy.get('#experience').should('exist')
      cy.get('h2')
        .eq(0)
        .should(
          'have.text',
          `Work Experience · ${WORK.totalYearsOfExperience}+ years`,
        )

      cy.get('#education').should('exist')
      cy.get('h2').eq(1).should('have.text', 'Education')

      cy.get('#skills').should('exist')
      cy.get('h2').eq(2).should('have.text', 'Skills')

      cy.get('#contact').should('exist')
      cy.get('h2').eq(3).should('have.text', 'Contact Information')
    })

    it('renders footer links', () => {
      const footerLinks = cy.get('footer a')

      footerLinks.should('have.length', '10')
    })

    it('combines all skills', () => {
      const allSkills = []

      cy.get('[data-testid="skill"]')
        .should('have.length', '23')
        .each(($skill) => {
          allSkills.push($skill.text)
        })

      // check for non-unique skills
      expect(allSkills.length).to.be.equal([...new Set(allSkills)].length)
    })
  })
})
