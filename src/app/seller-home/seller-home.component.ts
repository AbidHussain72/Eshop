import { Component } from '@angular/core';
import { Product } from '../data_type';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  productList: undefined | Product[];
  constructor(private product: ProductsService) {}
  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      // console.log(result);
      this.productList = result;
    });
  }
}
