import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompradorComponent } from './ui/auth/login-comprador/login-comprador.component';
import { LoginVendedorComponent } from './ui/auth/login-vendedor/login-vendedor.component';
import { RegisterVendedorComponent } from './ui/auth/register-vendedor/register-vendedor.component';
import { RegisterCompradorComponent } from './ui/auth/register-comprador/register-comprador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompradorComponent,
    LoginVendedorComponent,
    RegisterVendedorComponent,
    RegisterCompradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
