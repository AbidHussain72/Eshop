import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data_type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  addProduct(data:Product){
   return this.http.post('http://localhost:3000/Products', data);
  }
  productList(){
    return this.http.get<Product[]>('http://localhost:3000/Products');
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/Products/${id}`);
  }
  getProduct(id:string){
    return this.http.get<Product>(`http://localhost:3000/Products/${id}`);
  }
  productUpdate(product:Product){
    return this.http.put<Product>(`http://localhost:3000/Products/${product.id}`,product);
  }
}
