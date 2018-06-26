import { Component, OnInit,ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CookieService } from "ngx-cookie-service";
import { SharedService } from "../../shared.service";
import { CartService } from './cart.service';
import { ToastrService } from "ngx-toastr";

@Component({
  templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit{
  constructor(
    private cookieService: CookieService,
    private sharedService: SharedService,
    private cartService: CartService,
    private toastrService:ToastrService
  ){

  }
  @ViewChild('infoModal') infoModal;
  public currentUser;
  private totalMoney=0;
  public carts: any[]=[];
  private apiUrl = environment.apiUrl;
  product;
  imageUrl: string=this.apiUrl+'images/';

  ngOnInit(){
    if(this.cookieService.check('cart')){
      this.carts=JSON.parse(this.cookieService.get('cart'));
      this.Compute();
    }
    if(localStorage.getItem("currentUser"))
    {
      this.currentUser =JSON.parse(localStorage.getItem('currentUser')) ;
    }else{
      var user={};
      user['name']="";
      user['email']="";
      user['address']="";
      this.currentUser={};
      this.currentUser['token']="";
      this.currentUser['user']=user;
    }
  }

  Send(){
    if(this.currentUser.token===""){
      this.toastrService.warning("Please login to continue!","Login is required");
    }else{
    var param={};
    param['token']=this.currentUser.token;
    var arrayDetail=[];
    for(var i=0;i<this.carts.length;i++){
      arrayDetail.push({id:this.carts[i].product.id,quantity:this.carts[i].quantity});
    }
    param['arrayDetail']=arrayDetail;
    this.cartService.Send(param).pipe().subscribe(data=>{
      console.log("SUCCESS:",data);
    },
    error=>{
      if(error.error.text==="THEM_THANH_CONG"){
        this.infoModal.hide();
        this.toastrService.success("You ordered successfully. We will announce you immediatelly as soon as well!","Congratulation!");
      } else if(error.error.text==="TOKEN_KHONG_HOP_LE"){
        this.toastrService.error("The transaction has expired!","Error!");
      } else if(error.error.text==="HET_HAN"){
        this.toastrService.error("The transaction has expired!","Error!");
      } else this.toastrService.error("Unknow error!","Error!");
    })
  }
  }

  Delete(id:number){
    for(var i=0;i<this.carts.length;i++){
      if(this.carts[i].product.id==id){
        this.carts.splice(i,1);
        if(this.carts.length===0){
          this.cookieService.delete("cart");
        } else{
          this.cookieService.set("cart",JSON.stringify(this.carts),1);
        }
        this.Compute();
        this.sharedService.Confirm(this.carts.length);
        return;
      }
    }
  }

  Minus(id:number){
    for(var i=0;i<this.carts.length;i++){
      if(this.carts[i].product.id==id){
        if(this.carts[i].quantity>1){
          this.carts[i].quantity-=1;
          this.Compute();
          this.cookieService.set("cart",JSON.stringify(this.carts),1);
          return;
        }
      }
    }
  }

  Plus(id:number){
    for(var i=0;i<this.carts.length;i++){
      if(this.carts[i].product.id==id){
        if(this.carts[i].quantity<10){
          this.carts[i].quantity+=1;
          this.Compute();
          this.cookieService.set("cart",JSON.stringify(this.carts),1);
          return;
        }
      }
    }
  }

  Compute(){
    this.totalMoney=0;
    for(var i=0; i<this.carts.length;i++){
      this.totalMoney+=this.carts[i].product.price*this.carts[i].quantity;
    }
  }
}
