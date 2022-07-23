import { Component, Input, OnInit } from '@angular/core';
import { Propuesta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-propuestas',
  templateUrl: './propuestas.component.html',
  styleUrls: ['./propuestas.component.css']
})
export class PropuestasComponent implements OnInit {


  @Input()
  propuesta:Propuesta

  constructor() { }

  ngOnInit(): void {
  }

}
