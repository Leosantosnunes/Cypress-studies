import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public products = [
    {name: "Macbook Pro", company: "Apple", price: 2499.00},
    {name: "Ipad", company: "Apple", price: 499.00},
    {name: "TV", company: "Samsung", price: 299.00}

  ]
}
