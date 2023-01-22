import { SOCIALS, WORK } from '../../src/content/data'

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
      cy.get('h1').should('contain.text', 'Hi! I’m Dolf Barr ')

      cy.get('#experience').should('exist')
      cy.get('h2')
        .eq(0)
        .should(
          'contain.text',
          `Work Experience · ${WORK.totalYearsOfExperience}+ years`,
        )

      cy.get('#skills').should('exist')
      cy.get('h2').eq(2).should('contain.text', 'Skills')
    })

    it('renders footer  social links', () => {
      const footerLinks = cy.get('footer a[data-testid="social-link"]')

      footerLinks.should('have.length', '12')
    })

    it('combines all skills', () => {
      const allSkills: string[] = []

      cy.get('[data-testid="skill"]')
        .should('have.length', '23')
        .each(($skill) => {
          allSkills.push(String($skill.text))
        })

      // check for non-unique skills
      expect(allSkills.length).to.be.equal([...new Set(allSkills)].length)
    })

    it('renders emails with mailto: hrefs', () => {
      cy.contains(SOCIALS.email).each(($email) => {
        cy.wrap($email)
          .closest('a')
          .should('have.attr', 'href')
          .then((href) => {
            expect(href).to.contain('mailto:')
          })
      })
    })

    it('enables dark theme', () => {
      cy.get('[data-testid="change-theme"').click()

      cy.get('html').should('have.class', 'dark')
    })
  })
})
