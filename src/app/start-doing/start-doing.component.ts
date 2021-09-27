import { Component, OnInit } from '@angular/core';
import { startDoing } from '../models/start-doing.model';

@Component({
  selector: 'app-start-doing',
  templateUrl: './start-doing.component.html',
  styleUrls: ['./start-doing.component.scss']
})
export class StartDoingComponent implements OnInit {



  startDoing:startDoing[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  clearWciCards() {
    this.startDoing.length = 0;
  }

  addWciCard()
  {
    this.startDoing.push({
      startDoing:""
     
    });
  }
  save(save:startDoing,index:number)
  {
    console.log(save,index);
  }

}
