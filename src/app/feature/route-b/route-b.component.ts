import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as productPriceArray from '../../feature/route-b/route-b-routing.module'
@Component({
  selector: 'app-route-b',
  templateUrl: './route-b.component.html',
  styleUrls: ['./route-b.component.css']
})
export class RouteBComponent implements OnInit {

  productPrice: any = [
  ];
  isGrid: boolean;
  selectedOrder: string;
  productPriceShow: any = [];

  constructor(private sharedService:SharedService) {
    this.selectedOrder = 'Price - Low to High';
    this.isGrid = true;
  }

  ngOnInit(): void {
    this.getProductData();
    this.sortPrices();
  }

 public sortPrices() {
    this.productPriceShow = [];
    this.selectedOrder === 'Price - Low to High' ? this.productPriceShow = this.productPrice.sort()
      : this.productPriceShow = this.productPrice.sort().reverse();
  }

  public getProductData(){
    this.sharedService.getProductData().subscribe((res)=>{
      this.productPrice=res;
      this.sortPrices();
    },(err)=>{

    })
    // fetch('https://fakestoreapi.com/products')
    //         .then((res)=>{
    //          this.productPrice = res;
    //          this.sortPrices();
    //         }
    //         )
    //         .catch(json=>console.log(json))

  }

}
