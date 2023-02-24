import { Component } from '@angular/core';
import { Product } from '../data_type';
import { ProductsService } from '../services/products.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  faTrash = faTrash;
  faEdit = faEdit;
  productList: undefined | Product[];
  constructor(private product: ProductsService) {}
  ngOnInit(): void {
    this.productFun();
  }
  deleteItem(id:number){
    console.log('ID',id)
    this.product.deleteProduct(id).subscribe((result)=>{
      alert('Product Deleted successfully with id '+ id )
      this.productFun();
    })
  }
  productFun(){
    this.product.productList().subscribe((result) => {
      // console.log(result);
      this.productList = result;
    });
  }
}
