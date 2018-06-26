import { Component } from '@angular/core';
import { LoginService } from "./login.service";
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  email: string="";
  password: string="";
  isLoginFail = false;

  Login(){
    this.loginService.login(this.email,this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.isLoginFail=false;
          this.router.navigate(['home']);
        },
        error => {
          this.isLoginFail=true;
      });
  }
  _press(event:any){
    if(event.keyCode == 13) {
      this.Login();
    }
  }
}
