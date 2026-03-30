import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API = "http://localhost:3000/"
export 
interface IProduct{
  id:number,
  name:string,
  price:number,
  description:string,
  quantity:number
}
@Injectable({
  providedIn: 'root',
})
export class productServices {
  constructor(private http: HttpClient){}
  fetchProduct():Observable<IProduct[]>{
      return this.http.get<IProduct[]>(API + "products")
  }
  deleteProduct(id: number): Observable<IProduct>{
    return this.http.delete<IProduct>(API + 'products/' + id)
  }
  createProduct(product:Omit<IProduct,'id'>){
    return this.http.post(API + "products",product)
  }
}
