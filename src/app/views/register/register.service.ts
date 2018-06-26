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

export class RegisterService {

  constructor(private http: HttpClient) { }

  private apiUrl =environment.apiUrl+"register.php";


  Register(param){
    return this.http.post<any>(this.apiUrl,param)
    .pipe(map(res=>{
      return res;
    }))
  }

}
