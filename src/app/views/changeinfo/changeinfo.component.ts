import { Component, OnInit } from "@angular/core";
import { ChangeinfoService } from "./changeinfo.service";
import { first } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Component({
    templateUrl: "changeinfo.component.html"
})

export class ChangeinfoComponent implements OnInit{
    constructor(
        private changeinfoService:ChangeinfoService,
        private toastrService:ToastrService
    ){}

    currentUser;

    ngOnInit(){
        if(localStorage.getItem("currentUser")){
            this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
        }
    }

    Save(){
        var param={};
        param['token']=this.currentUser.token;
        param['name']=this.currentUser.user.name;
        param['address']=this.currentUser.user.address;
        param['phone']=this.currentUser.user.phone;
        this.changeinfoService.ChangeInfo(param)
        .then(data=>{
            if(data.email){
                localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
                this.toastrService.success("Changed successfully","Success");
            } else{
                this.toastrService.error("Info not change","Error");
            }
        })
    }

    _keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
    
        if (!pattern.test(inputChar)) {
          // invalid character, prevent input
          event.preventDefault();
        }
    }
}
