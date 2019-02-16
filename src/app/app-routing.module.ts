import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'account', component: AccountComponent},
  {path:'account/orders', component: MyOrdersComponent},
  {path:'account/orders/:id', component: OrderDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
