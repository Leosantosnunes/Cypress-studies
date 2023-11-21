import { ContactComponent } from "./contact.component"

describe('ContactComponent.cy.ts', () => {
  it('Contact component is running', () => {
    cy.mount(ContactComponent)    
  })
})