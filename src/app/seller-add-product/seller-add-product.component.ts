import { Component } from '@angular/core';
import { Product } from '../data_type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  addProductMessage:string|undefined;
  showMsg:boolean = false;
  constructor(private product:ProductsService){}
  submitProduct(data: Product) {
    // console.log(data);
    this.product.addProduct(data).subscribe((result)=>{
      if(result){
        this.addProductMessage = "Product Added Successfully"
        this.showMsg = true
      }
      setTimeout(()=>{this.addProductMessage = undefined;this.showMsg = false},3000)
    })
  }
}
