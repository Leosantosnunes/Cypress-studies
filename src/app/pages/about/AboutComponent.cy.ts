import { AboutComponent } from "./about.component"


describe('AboutComponent.cy.ts', () => {
  it('About component is running', () => {
    cy.mount(AboutComponent)    
  })
})