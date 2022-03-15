import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingService } from 'src/app/shopping.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()product:any={};
  selectedproduct="";

  @Output() e:EventEmitter<any>=new EventEmitter();

  addcart()
  {

  }
  delete()
  {
    this.e.emit(this.product.id)
  }

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }

}
