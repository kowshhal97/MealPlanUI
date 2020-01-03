import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PaymentComponent } from './payment/payment.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', component: HomeComponent
},{path:'subscribe',component:SubscriptionComponent},
{path:'payment',component:PaymentComponent},
{path:'menu',component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
