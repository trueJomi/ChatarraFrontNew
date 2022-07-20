import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { SubastaComponent } from './subasta/subasta.component';


@NgModule({
  declarations: [
    SubastaComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
