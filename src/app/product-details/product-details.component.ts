import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Iproduct | undefined = {
    id: 1,
    name: 'VASE',
    image: 'assets/images/22222.png',
    price: 37.7,
    quantity: 12,
    discount: 5,
    onsale: true,
    description: 'Some Text'
  };

  id: number = 1;
  constructor(private activeRoute: ActivatedRoute, private prodService: ProductService) { }
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.product = this.prodService.getProductById(this.id);
    if (this.product === undefined) {
    }
    
  }


}
