import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

 // links = ['First', 'Second'];
  //activeLink = this.links[0];



  constructor(private router: Router,private api:ApiService) { }
//
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
//


  onBack()
  {
    this.router.navigate(['/']);
  }



  onSubmit(Form : NgForm)
  {
//this.productList=Form.value;
    console.log('Congrats! Form is submitted');
    console.log(Form.value);

    this.api.saveProduct(Form.value).subscribe((res)=>{
      console.log(res)})
  }

 delete() {


 }



}



/*


  productList:any = [];
  ngOnInit(): void {
    this.api.saveProduct().subscribe((res)=>{
      this.productList = res;
      console.log(this.productList);
      this.productList.forEach((a: any) => {
        Object.assign(a,{quantity:1,total:a.price});

      });
    });
  }
*/
