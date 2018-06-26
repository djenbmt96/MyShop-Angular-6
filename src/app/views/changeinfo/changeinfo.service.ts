import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
export class ChangeinfoService {

  constructor(private http: HttpClient) { }

  private apiUrl=environment.apiUrl;

  ChangeInfo(param){
    return this.http.post<any>(this.apiUrl+'change_info.php',param,httpOptions)
      .toPromise();
  }

}
