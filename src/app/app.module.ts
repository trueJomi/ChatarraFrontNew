import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormSubastaComponent } from './adapters/Presenter/form-subasta/form-subasta.component';
import { MaterialModule } from './ui/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewSubastaComponent } from './ui/vendedor/subasta-components/new-subasta/new-subasta.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSubastaComponent,
    NewSubastaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
