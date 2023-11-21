
import { ProductComponent } from "./product.component";
import { ServiceComponent } from "src/app/pages/service/service.component";

describe('ProductComponent.cy.ts', () => {
  it('AddItems component is running (Standalone)', () => {
    cy.mount(ProductComponent)},    
    )



    it('a list should be created', () => {
      cy.mount(ProductComponent);
      cy.get(':nth-child(2) > :nth-child(4) > [data-cy="deleteItem"]') // Assuming button text is "Add Product"
      //cy.get('[this.productService.products$]').should('have.length',2)

      //cy.visit('http://localhost:4200/service');
    });
});