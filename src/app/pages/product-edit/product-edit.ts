import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productServices } from '../../services/product';

@Component({
  selector: 'product-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit {
  userForm: FormGroup
  constructor(
    private route: ActivatedRoute,
    private productService: productServices,
    private fb: FormBuilder,
    private navigation: Router
  ){
    this.userForm = this.fb.group({
      name: '',
      price: '',
      description: '',
      quantity: ''
    })
  }
  id: number = 0;
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.productService.getProductById(this.id).subscribe((data)=>{
      this.userForm.patchValue(data);
    })
  }
  async onSubmit() {
    await this.productService.updateProduct(this.id, this.userForm.value).subscribe()

    this.navigation.navigate(['/products'])
  }
}
