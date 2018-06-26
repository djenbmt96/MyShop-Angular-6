import { Component, OnInit } from "@angular/core";
import { OrderhistoryService } from "./orderhistory.service";
import { first } from "rxjs/operators";

@Component({
    templateUrl: "orderhistory.component.html"
})

export class OrderhistoryComponent implements OnInit{
    constructor(private orderhistoryService:OrderhistoryService){}

    private currentUser;
    private data=[];
    private dataInPage=[];
    totalItems: number=0;
    currentPage: number=1;
    maxSize: number=7;
    itemsPerPage: number=5;

    ngOnInit(){
        if(localStorage.getItem("currentUser")){
            this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
        }
        this.Get();
    }

    Get(){
        this.orderhistoryService.GetInfo({token:this.currentUser.token})
        .then(res=>{
            this.data=res;
            this.totalItems=this.data.length;
            this.changeDataPage(1);
        });
    }

    pageChanged(event: any): void {
        this.currentPage=event.page;
        this.changeDataPage(event.page);
        
        console.log('Number items per page: ' + event.itemsPerPage);
    }

    changeDataPage(page:number){
        var startAt=0;
        startAt=(page-1)*this.itemsPerPage;
        this.dataInPage=this.data.slice(startAt,startAt+this.itemsPerPage);
    }
}