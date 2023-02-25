import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../data_type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-edit-product',
  templateUrl: './seller-edit-product.component.html',
  styleUrls: ['./seller-edit-product.component.css'],
})
export class SellerEditProductComponent {
  updateMessage = "";
  constructor(
    private route: ActivatedRoute,
    private product: ProductsService,
    private router:Router,
  ) {}
  productDetail: undefined | Product;
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        console.warn(result);
        this.productDetail = result;
      });
  }
  updateProduct(data:Product) {
    if(this.productDetail){
      data.id = this.productDetail?.id
    }
    this.product.productUpdate(data).subscribe((result) => {
      this.updateMessage = "Product Updated successfully"
      setTimeout(()=>this.router.navigateByUrl('seller_home'),3000);
    });
    setTimeout(() => {
      this.updateMessage
    }, 3000);
  }
  
}
