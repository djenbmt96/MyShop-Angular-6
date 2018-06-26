import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';


@Component({
    templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit{
    constructor(private productService: ProductsService){
        
    }

    products: any[]=[];
    totalItems: number=0;
    currentPage: number=1;
    maxSize: number=7;
    itemsPerPage: number=9;

    ngOnInit(){
        this.productService.getProducts(this.currentPage).then(data=>{
            this.products=data.product;
            this.totalItems=data.quantity;
        });
    }

    pageChanged(event: any): void {
        this.currentPage=event.page;
        this.productService.getProducts(event.page).then(data=>{
            this.products=data.product;
        });
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }

    setPage(pageNo: number): void {
        this.currentPage = pageNo;
    }
}