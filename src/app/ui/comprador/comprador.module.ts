import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompradorRoutingModule } from './comprador-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { HistorialComponent } from './layout/historial/historial.component';
import { SubastaCComponent } from './nuevo-c-components/subasta-c/subasta-c.component';
import { TargetsComponent } from './layout/targets/targets.component';
import { PropuestasComponent } from './nuevo-c-components/propuestas/propuestas.component';
import { FromPropuestaComponent } from 'src/app/adapters/Presenter/from-propuesta/from-propuesta.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecojoComponent } from './nuevo-c-components/recojo/recojo.component';
import { ListarSercaComponent } from './layout/listar-serca/listar-serca.component';
import { CompletarComponent } from './nuevo-c-components/completar/completar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListarComponent,
    HistorialComponent,
    SubastaCComponent,
    TargetsComponent,
    PropuestasComponent,
    FromPropuestaComponent,
    RecojoComponent,
    ListarSercaComponent,
    CompletarComponent,
  ],
  imports: [
    CommonModule,
    CompradorRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CompradorModule { }
