import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { ModalModule } from "ngx-bootstrap/modal";
import { AlertModule } from 'ngx-bootstrap/alert';

import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    ModalModule,
    CommonModule,
    HttpModule,
    FormsModule,
    CartRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    AlertModule.forRoot()
  ],
  declarations: [ CartComponent ],
  providers:[CookieService]
})
export class CartModule { }
