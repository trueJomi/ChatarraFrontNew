import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginCompradorComponent } from './login-comprador/login-comprador.component';
import { LoginVendedorComponent } from './login-vendedor/login-vendedor.component';
import { RegisterCompradorComponent } from './register-comprador/register-comprador.component';
import { RegisterVendedorComponent } from './register-vendedor/register-vendedor.component';


@NgModule({
  declarations: [
    LoginCompradorComponent,
    LoginVendedorComponent,
    RegisterCompradorComponent,
    RegisterVendedorComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
