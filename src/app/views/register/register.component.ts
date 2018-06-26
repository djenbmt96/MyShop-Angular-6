import { Component } from '@angular/core';
import { RegisterService } from "./register.service";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private registerService: RegisterService) { }

  name:string;
  email:string;
  password1:string;
  password2:string;
  isSuccess=0;

  Register(){
    this.isSuccess=0;
    this.registerService.Register({name:this.name,email:this.email,password:this.password1})
    .pipe()
    .subscribe(data=>{
      console.log("SUCCESS:",data);
    },
    error=>{
      if(error.error.text==="THANH_CONG"){
        this.isSuccess=1;
      } else{
        this.isSuccess=-1;
      }
    })
  }

}
