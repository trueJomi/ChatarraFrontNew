import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
