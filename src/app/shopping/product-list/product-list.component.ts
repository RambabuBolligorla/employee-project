import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  catch(value:any)
  {
    this.selectedproduct={};
    this.products = this.products.filter((data:any)=>data.id!=value);
  }
products:any=[];
selectedproduct={};


view(product:any)
{
this.selectedproduct=product;
}
  constructor(private shoppingService:ShoppingService){
    this.shoppingService.getdetails().subscribe(
      (data:any)=>{
        this.products=data;
      },
      (error:any)=>{
        alert("server down");
      }
    )
  }


  ngOnInit(): void {
  }

}
