import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropuestaService } from 'src/app/data/Remote/propuesta.remote';
import { Propuesta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-from-propuesta',
  templateUrl: './from-propuesta.component.html',
  styleUrls: ['./from-propuesta.component.css']
})
export class FromPropuestaComponent implements OnInit {

  form: FormGroup;
  propuesta: Propuesta;
  @Output() onSave: EventEmitter<any> = new EventEmitter();


  constructor(
    private propuestaService: PropuestaService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      price: new FormControl('',Validators.required)
    })
  }
  save(){
    let propuesta = new Propuesta();
    propuesta.price = this.form.value['price']
    this.onSave.emit(propuesta);
    
  }
}
