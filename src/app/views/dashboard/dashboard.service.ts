import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = environment.apiUrl;
  
  constructor( private http: Http ) { }

  getInfo() {
    return this.http.get(this.apiUrl).toPromise().then(res=>res.json());
  }
}
