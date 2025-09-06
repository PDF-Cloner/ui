import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld Integration', () => {
  it('renders props and reacts to interactions', () => {
    cy.mount(HelloWorld, {
      props: { msg: 'Hello from TS!' },
    })
    cy.get('h1').should('contain.text', 'Hello from TS!')
  })
})
