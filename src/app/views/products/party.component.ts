import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
    templateUrl: 'party.component.html'
})

export class PartyComponent implements OnInit{
    constructor(private productsService: ProductsService){}

    products: any[]=[];
  totalItems: number=0;
  currentPage: number=1;
  maxSize: number=7;
  itemsPerPage: number=9;
  idType:number=6;

  ngOnInit(){
    this.productsService.getProductByType(this.idType,this.currentPage)
    .then(data=>{
      this.products=data.product;
      this.totalItems=data.quantity;
    })
  }

  pageChanged(event: any): void {
    this.currentPage=event.page;
    this.productsService.getProductByType(this.idType,this.currentPage)
    .then(data=>{
      this.products=data.product;
    })
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
}
}