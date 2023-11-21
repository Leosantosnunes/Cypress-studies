import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/pages/service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.products$.subscribe(products => {
      this.products = products;
    });
  }

  deleteItem(index: number) {
    this.productService.deleteProduct(index);    
  }

  
}
