import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SallerComponent } from './saller/saller.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthGuard } from './seller-auth.guard';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'saller',
    component: SallerComponent,
  },
  {
    path: 'seller_home',
    component: SellerHomeComponent,
    canActivate:[SellerAuthGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddProductComponent,
    canActivate:[SellerAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
