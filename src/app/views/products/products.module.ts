import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { ProductsComponent } from './products.component';
import { MaxiComponent }  from './maxi.component';
import { MiniComponent } from './mini.component';
import { PartyComponent } from './party.component';
import { RompersComponent } from './rompers.component';
import { DetailComponent } from './detail.component';
import { ProductboxComponent } from "./productbox.component";

@NgModule({
    imports:[
        ProductsRoutingModule,
        CommonModule,
        FormsModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        ProductsComponent,
        MaxiComponent,
        MiniComponent,
        PartyComponent,
        RompersComponent,
        DetailComponent,
        ProductboxComponent
    ]
})

export class ProductsModule {}