import { Component, Input } from "@angular/core";
import { environment } from "../../../environments/environment";

@Component({
    templateUrl: 'productbox.component.html',
    selector: 'app-productbox'
})

export class ProductboxComponent{
    @Input() product:any;
    private apiUrl = environment.apiUrl;
    imageUrl: string=this.apiUrl+'images/';
    constructor(){}
}