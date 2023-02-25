import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SellerDetails } from '../data_type';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-saller',
  templateUrl: './saller.component.html',
  styleUrls: ['./saller.component.css'],
})
export class SallerComponent {
  constructor(private seller: SellerService, private router: Router) {}
  showLoginFlag = false;

  sellerAuthErr: string = '';
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  
  signUp(data: SellerDetails): void {
    this.seller.userSignUp(data);
  }
  login(data: SellerDetails): void {
    this.sellerAuthErr = '';
    this.seller.sellerLogin(data);
    // console.log(data)
    this.seller.isLoginError.subscribe((error) => {
      if (error) {
        this.sellerAuthErr = "Email or Password doesn't match";
      } else {
      }
    });
  }
  showLogin() {
    this.sellerAuthErr = '';
    this.showLoginFlag = true;
  }
  showSingUp() {
    this.showLoginFlag = false;
  }
}
