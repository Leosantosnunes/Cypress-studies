import { HeaderComponent } from "./header.component"

describe('ServiceComponent.cy.ts', () => {
  it('Service component is running', () => {
    cy.mount(HeaderComponent)    
  })
})