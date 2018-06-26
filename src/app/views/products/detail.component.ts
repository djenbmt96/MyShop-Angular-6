import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "./products.service";
import { environment } from "../../../environments/environment";
import { CookieService } from "ngx-cookie-service";
import { SharedService } from '../../shared.service';
import { ToastrService } from "ngx-toastr";

@Component({
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit{

    constructor(
        private route: ActivatedRoute,
        private productService: ProductsService,
        private cookieService: CookieService,
        private sharedService: SharedService,
        private toastrService: ToastrService
    ){}

    product:any;
    private apiUrl = environment.apiUrl;
    public urlImage = this.apiUrl+"images/product/";

    ngOnInit(){
        this.getProduct();
        // this.cookieService.deleteAll();
    }

    getProduct(){
        const id= +this.route.snapshot.paramMap.get('id');
        this.productService.getProductById(id)
        .then(data=>{
            this.product=data;
        })
    }

    addCart(){
        if(this.product.id){
            var cart=[];
            if(this.cookieService.check("cart")){
                var isExist=false;
                var oldCart=JSON.parse(this.cookieService.get("cart"));
                oldCart.forEach(element => {
                    if(element.product.id===this.product.id){
                        isExist=true;
                        return;
                    }
                });
                if(!isExist){
                    cart=oldCart;
                    cart.push({product:this.product,quantity:1});
                    this.cookieService.set("cart",JSON.stringify(cart),1);
                    this.sharedService.Confirm(cart.length);
                    this.toastrService.success("You added 1 product successfully","Success!");
                }else{
                    this.toastrService.warning("This product already had in Cart","Warning!");
                }
            } else{
                cart.push({product:this.product,quantity:1});
                this.cookieService.set("cart",JSON.stringify(cart),1);
                this.sharedService.Confirm(cart.length);
                this.toastrService.success("You added 1 product successfully","Success!");
                
            }
        }
    }
}