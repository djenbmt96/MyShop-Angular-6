import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiUrl =environment.apiUrl;

  login(email: string, password: string){
    return this.http.post<any>(this.apiUrl+'login.php',{email:email,password:password},httpOptions)
          .pipe(map(user=>{
            if(user && user.token){
              localStorage.setItem("currentUser",JSON.stringify(user));
            }
            return user;
          }));
  }
  
  logout(){
    localStorage.removeItem("currentUser");
  }
}
