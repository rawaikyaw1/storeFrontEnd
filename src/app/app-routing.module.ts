import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent,canActivate:[AuthGuard]},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'account', component: AccountComponent,canActivate:[AuthGuard]},
  {path:'account/orders', component: MyOrdersComponent,canActivate:[AuthGuard]},
  {path:'account/orders/:id', component: OrderDetailsComponent,canActivate:[AuthGuard]},
  {path: 'checkout', component: CheckoutComponent,canActivate:[AuthGuard]},
  {path: 'thankyou', component: ThankyouComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
