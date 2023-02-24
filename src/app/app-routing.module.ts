import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { LoginComponent } from './components/login/login.component';
import { GuiaremisionComponent } from './components/guiaremision/guiaremision.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'main',component:GuiaremisionComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'',component:GuiaremisionComponent,canActivate:[AuthGuard]},
  {path:'factura',component:FacturacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
