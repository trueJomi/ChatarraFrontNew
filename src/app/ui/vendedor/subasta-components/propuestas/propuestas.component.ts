import { Component, Input, OnInit } from '@angular/core';
import { Propuesta } from 'src/app/domain/entities/subasta.entity';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-propuestas',
  templateUrl: './propuestas.component.html',
  styleUrls: ['./propuestas.component.css']
})
export class PropuestasComponent implements OnInit {

  @Input()
  public propuesta:Propuesta;

  constructor() { }

  ngOnInit(): void {

  }

}
