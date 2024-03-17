import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    image: new FormControl('assets/images/2222.png', [

    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    price: new FormControl(0, [
      Validators.required,
      Validators.min(100)
    ]),
    quantity: new FormControl(0, [
      Validators.required,
      Validators.min(5)
    ]),
    discount: new FormControl(0, [
      Validators.required,
      Validators.min(5),
      Validators.max(25)
    ]),
    onsale: new FormControl(false, [
      Validators.required,
    ]),
  })
  get nameControl() {
    return this.productForm.get('name');
  }

  get descriptionControl() {
    return this.productForm.get('description');
  }

  get priceControl() {
    return this.productForm.get('price');
  }

  get quantityControl() {
    return this.productForm.get('quantity');
  }

  get discountControl() {
    return this.productForm.get('discount');
  }


  constructor(private prodService: ProductService, private myRouter: Router, private actRoute: ActivatedRoute) { }
  id: number = 0;

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    if (this.id != 0) {
      
    

      }
    }
  
      // var product = this.prodService.getProductById(this.id);
      // this.productForm.controls['name'].setValue(product?.name);
      // this.productForm.controls['price'].setValue(product?.price);
      // this.productForm.controls['quantity'].setValue(product?.quantity);
      // this.productForm.controls['description'].setValue(product?.description);
      // this.productForm.controls['onsale'].setValue(product?.onsale);
      // this.productForm.controls['discount'].setValue(product?.discount);
      // this.productForm.controls['image'].setValue(product?.image);   
    
  
  onSubmit(e: Event) {
    e.preventDefault;
    if (this.productForm.valid) {
      if (this.id) {

      }
      else {
        this.prodService.addProduct(this.productForm.value);
      }
      this.myRouter.navigate(['./products']);
    }

  }
  }



