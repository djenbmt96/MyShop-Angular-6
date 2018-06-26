import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { MaxiComponent } from './maxi.component';
import { MiniComponent } from './mini.component';
import { PartyComponent } from './party.component';
import { RompersComponent } from './rompers.component';
import { DetailComponent } from './detail.component';

const routes: Routes = [
    {
        path:'',
        component: ProductsComponent,
        data: {
            title: "Products"
        }
    },
    {
        path:'',
        data: {
            title: "Products"
        },
        children: [
            {
                path:'maxi',
                component: MaxiComponent,
                data: {
                    title: "Maxi"
                }
            },
            {
                path:'mini',
                component: MiniComponent,
                data:{
                    title:"Mini"
                }
            },
            {
                path:'party',
                component: PartyComponent,
                data:{
                    title:"Party"
                }
            },
            {
                path:'rompers',
                component: RompersComponent,
                data:{
                    title:"Rompers"
                }
            },
            {
                path:'detail/:id',
                component: DetailComponent,
                data:{
                    title:"Detail"
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}