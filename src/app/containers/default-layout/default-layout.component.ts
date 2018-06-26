import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { LoginService } from '../../views/login/login.service';
import { CookieService } from "ngx-cookie-service";
import { SharedService } from '../../shared.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  providers: [SharedService]
})
export class DefaultLayoutComponent implements OnInit{
  
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public isLogin = false;
  public currentUser;
  private numberOfCart=0;
  
  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private sharedService: SharedService,
    private router: Router,
  ) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });

    this.sharedService.confirmed$.subscribe(
      data=>{
        this.numberOfCart=data;
      }
    )

  }

  ngOnInit(){
    if(localStorage.getItem("currentUser"))
    {
      this.isLogin=true;
      this.currentUser =JSON.parse(localStorage.getItem('currentUser')) ;
    }
    if(this.cookieService.check("cart")){
      this.numberOfCart=JSON.parse(this.cookieService.get("cart")).length;
    }
  }

  Logout(){
    this.loginService.logout();
    this.isLogin=false;
    this.router.navigate(['/login'])
  }
}
