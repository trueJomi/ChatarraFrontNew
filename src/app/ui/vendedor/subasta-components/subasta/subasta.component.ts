import { Component, OnInit } from '@angular/core';
import { SubastaServicePresenter } from 'src/app/adapters/Presenter/subasta.presenter';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta.component.html',
  styleUrls: ['./subasta.component.css']
})
export class SubastaComponent implements OnInit {

  constructor(
    subasta:SubastaServicePresenter,
  ) { }

  ngOnInit(): void {
  }

}
