import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/pages/service/product.service';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {

  productName: string = '';
  company: string = '';
  price: number = 0;

  constructor(private productService: ProductService, private route:Router) {}

  addProduct() {
    const newProduct = {
      name: this.productName,
      company: this.company,
      price: this.price
    };
    this.productService.addProduct(newProduct);
    this.productName = '';
    this.company = '';
    this.price = 0;

    this.route.navigateByUrl('service');
  }
}
