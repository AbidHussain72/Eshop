import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SellerDetails } from '../data_type';
@Component({
  selector: 'app-saller',
  templateUrl: './saller.component.html',
  styleUrls: ['./saller.component.css'],
})
export class SallerComponent {
  constructor(private seller: SellerService, private router: Router) {}
  showLoginFlag = false;
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: SellerDetails): void {
    this.seller.userSignUp(data);
  }
  login(data: SellerDetails): void {
    this.seller.sellerLogin(data);
    // console.log(data)
  }
  showLogin() {
    this.showLoginFlag = true;
  }
  showSingUp() {
    this.showLoginFlag = false;
  }
}
