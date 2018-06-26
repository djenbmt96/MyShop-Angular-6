import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = environment.apiUrl;

  constructor(private http:Http) { }

  getProducts(page:number) {
    var url=this.apiUrl+'products.php?page='+page;
    return this.http.get(url).toPromise().then(res=>res.json());
  }
  getProductByType(id:number, page:number) {
    var url=this.apiUrl+'product_by_type.php?id_type='+id+'&page='+page;
    return this.http.get(url).toPromise().then(res=>res.json());
  }
  getProductById(id:number) {
    var url=this.apiUrl+'product_detail.php?id='+id;
    return this.http.get(url).toPromise().then(res=>res.json());
  }
}
