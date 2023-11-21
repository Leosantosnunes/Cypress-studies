import { HomeComponent } from "./home.component"

describe('HomeComponent.cy.ts', () => {
  it('Home component is running', () => {
    cy.mount(HomeComponent)    
  })
})