import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { productServices } from '../../services/product';
import { Router } from '@angular/router';


@Component({
  selector: 'product-add',
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
  userForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: productServices,
    private router: Router
  ){
    this.userForm = this.fb.group({
      name:[''],
      price:[''],
      description:[''],
      quantity:[''],
    });
  }
  async onSubmit(){
    // console.log(this.userForm.value);
    // this.productService.createProduct(this.userForm.value).subscribe({})
    // this.router.navigate(['/products']);
    await this.productService.createProduct(this.userForm.value).subscribe();
    this.router.navigate(['/products'])
  }
}
