import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SharedService {

    private confirmedSource = new Subject<any>();

    confirmed$ = this.confirmedSource.asObservable();

    Confirm(quantity:number){
        this.confirmedSource.next(quantity);
    }

}