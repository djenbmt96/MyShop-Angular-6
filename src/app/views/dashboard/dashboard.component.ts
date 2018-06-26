import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: 'dashboard.component.html',
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit{
  constructor(private dashboardService: DashboardService){

  }

  private apiUrl = environment.apiUrl;
  products: any[]=[];
  firstOfType: any;
  types: any[]=[];
  imageUrl: string=this.apiUrl+'images/';
  widthScreen: number=window.innerWidth;

  ngOnInit(){
    this.dashboardService.getInfo().then(data=>{
      this.products=data.product,
      this.firstOfType=data.type[0],
      this.types=data.type.splice(1,3);
    });
    console.log("Type:",this.types);
  }
}
