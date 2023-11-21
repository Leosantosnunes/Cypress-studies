import { ServiceComponent } from "./service.component"

describe('ServiceComponent.cy.ts', () => {
  it('Service component is running', () => {
    cy.mount(ServiceComponent)    
  })
})