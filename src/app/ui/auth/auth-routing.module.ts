import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompradorComponent } from './login-comprador/login-comprador.component';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';
import { RegisterCompradorComponent } from './register-comprador/register-comprador.component';
import { RegisterVendedorComponent } from './register-vendedor/register-vendedor.component';

const routes: Routes = [
  {
    path: 'comprador',
    component: LoginCompradorComponent,
  },
  {
    path: '',
    component: LoginVendedorComponent,
  },
  {
    path: 'registro-comprador',
    component: RegisterCompradorComponent,
  },
  {
    path: 'registro-vendedor',
    component: RegisterVendedorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
