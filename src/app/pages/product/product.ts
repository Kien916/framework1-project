import { Component, signal } from '@angular/core';
import { IProduct, productServices } from '../../services/product';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(
    private productService: productServices,
  ) { }
  // products: IProduct[] = [];
  products = signal<IProduct[]>([]);

  loadProducts() {
    this.productService.fetchProduct().subscribe((data: IProduct[]) => {
      this.products.set(data);
    });
  }
  ngOnInit(){
    this.loadProducts();
  }
  deleteProduct(product: IProduct){
    this.productService.deleteProduct(product.id).subscribe((data) => {
      this.loadProducts();
      // this.products.set(this.products().filter(p => p.id !== product.id))
    });
  }
}