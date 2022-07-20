import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorRoutingModule } from './comprador-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { SubastaCComponent } from './subasta-c/subasta-c.component';
import { TargetsComponent } from './layout/listar/targets/targets.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListarComponent,
    HistorialComponent,
    SubastaCComponent,
    TargetsComponent
  ],
  imports: [
    CommonModule,
    CompradorRoutingModule
  ]
})
export class CompradorModule { }
