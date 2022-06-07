import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
//import { IProperty } from '../IProperty.interface';
import {MatCardModule} from '@angular/material/card';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})

export class PropertyCardComponent implements OnInit{
 // @Input() property : IProperty;




  productList:any = [];
  ngOnInit(): void {
    this.api.getProduct().subscribe((res)=>{
      this.productList = res;
      console.log(this.productList);
      this.productList.forEach((a: any) => {
        Object.assign(a,{quantity:1,total:a.price});

      });
    });
  }
  constructor(private api:ApiService, private cartService: CartService){}



  addtocart(item: any){
    this.cartService.addtoCart(item);

  }



}
