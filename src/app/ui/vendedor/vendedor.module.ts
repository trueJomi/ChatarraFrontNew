import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { SubastaComponent } from './subasta-components/subasta/subasta.component';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { TargetsComponent } from './layout/targets/targets.component';
import { PropuestasComponent } from './subasta-components/propuestas/propuestas.component';
import { EsperaComponent } from './subasta-components/espera/espera.component';
import { EditSubastaComponent } from './subasta-components/edit-subasta/edit-subasta.component';
import { NewSubastaComponent } from './subasta-components/new-subasta/new-subasta.component';
import { FormSubastaComponent } from 'src/app/adapters/Presenter/form-subasta/form-subasta.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompletarComponent } from './subasta-components/completar/completar.component';


@NgModule({
  declarations: [
    SubastaComponent,
    LayoutComponent,
    ListarComponent,
    HistorialComponent,
    TargetsComponent,
    PropuestasComponent,
    EsperaComponent,
    FormSubastaComponent,
    NewSubastaComponent,
    EditSubastaComponent,
    CompletarComponent,
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class VendedorModule { }
