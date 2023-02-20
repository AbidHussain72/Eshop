import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router){}
  ngOnInit(){
    this.route.events.subscribe((val:any)=>{
      console.log(val.url)
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn('inside seller')
        }else{
          console.log("outside seller")
        }
      }
    })
  }
}
