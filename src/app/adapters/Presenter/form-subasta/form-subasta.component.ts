import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Chatarra } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-form-subasta',
  templateUrl: './form-subasta.component.html',
  styleUrls: ['./form-subasta.component.css']
})
export class FormSubastaComponent implements OnInit {
  
  formSubasta: UntypedFormGroup;

  @Input() return:string;

  @Input() chatarra:Chatarra= new Chatarra();

  @Output() onSubmit:EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder:UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    this.formSubasta = this.formBuilder.group(
      {
        titulo: [this.chatarra.titulo,[Validators.required]],
        description: [this.chatarra.description,[Validators.required]],
        precioBase: [this.chatarra.precioBase,[Validators.required]]
      }
    );
  }
  save(){
    this.onSubmit.emit(this.formSubasta.value)
  }

}
