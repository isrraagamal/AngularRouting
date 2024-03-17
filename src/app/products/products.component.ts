import { ProductList } from './../product-list';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ProductList: Iproduct[] = [];
  constructor(private prodService: ProductService) {
  }
  ngOnInit(): void {
    this.ProductList = this.prodService.getAllProducts() as Iproduct[];
  }

  delete(id: number) {
    this.ProductList = this.ProductList.filter((p) => p.id != id)
  }
}
