

import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { BuyingService } from 'src/app/services/buying.service';
//import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

properties: Array<any> ;

  constructor(private buyingService: BuyingService) { }

  ngOnInit(): void {
    this.buyingService.getAllProperties().subscribe(
      data=>{
        this.properties=data;
       console.log(data)
       },
       error => {
       console.log(error);
       }

    )

  }

}
