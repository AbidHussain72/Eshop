export interface SellerDetails{
 name:string,
 email:string,
 type:string,
 password:string
}
export interface LoginDetails {
  password: string;
  email: string;
}
export interface Product {
  description: any;
  productName: string;
  productPrice: number;
  productColor: string;
  productDescription: string;
  productCategory: string;
  productUrl: string;
  id:number;
}