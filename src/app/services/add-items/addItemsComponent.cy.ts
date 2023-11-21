import { AddItemsComponent } from "./add-items.component"
import { ProductComponent } from "../product/product.component";
import { ServiceComponent } from "src/app/pages/service/service.component";

describe('AddItemsComponent.cy.ts', () => {
  it('AddItems component is running (Standalone)', () => {
    cy.mount(AddItemsComponent)},    
    )



    it('a list should be created', () => {
      cy.mount(AddItemsComponent);
      cy.contains('button', 'Add Product').click(); // Assuming button text is "Add Product"

      //cy.visit('http://localhost:4200/service');
    });
});