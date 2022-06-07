import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
//import { AlertifyService } from '../services/alertify.service';
//import { AlertifyService } from '../services/alertify.service';
//import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public totalItem : number = 0 ;


  constructor(private cartService: CartService) { }

  ngOnInit(): void{
    this.cartService.getProducts().subscribe((res)=>{
      this.totalItem = res.length;
    });

  }



  isAdmin(){
    let a = localStorage.getItem('role');
    return a === 'Admin';
  }
  loggedin()
  {
    return localStorage.getItem('token');
  }
  onLogout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

}
