import { Injectable } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductList } from '../product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products :Iproduct [] | undefined;
  constructor() { 
    this.products = ProductList;
  }
  getAllProducts(): Iproduct[] | undefined{
return this.products;
  }
  getProductById(id: number) :Iproduct | undefined{
    return this.products?.find(p => p.id == id);
  }


  counter: number = 5;
  addProduct(prod: Iproduct){
    var product = {...prod};
    product.id = ++ this.counter;
    this.products?.push(product);
  }
}
