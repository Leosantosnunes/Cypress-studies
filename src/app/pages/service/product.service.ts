import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<any[]>([
    { name: "Macbook Pro", company: "Apple", price: 2499.00 },
    { name: "Ipad", company: "Apple", price: 499.00 },
    { name: "TV", company: "Samsung", price: 299.00 }
  ]);

  products$: Observable<any[]> = this.productsSubject.asObservable();

  deleteProduct(index: number) {
    const currentProducts = this.productsSubject.getValue();
    currentProducts.splice(index, 1);
    this.productsSubject.next(currentProducts);
  }

  addProduct(newProduct: any) {
    const currentProducts = this.productsSubject.getValue();
    const updatedProducts = [...currentProducts, newProduct];
    this.productsSubject.next(updatedProducts);
  }
}
