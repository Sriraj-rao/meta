import { Component, OnInit } from '@angular/core';
import { actionItems } from '../models/action-item.model';
import { startDoing } from '../models/start-doing.model';

@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.scss']
})
export class ActionItemsComponent implements OnInit {
  actionItems:actionItems[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  clearWciCards() {
    this.actionItems.length = 0;
  }

  addWciCard()
  {
    this.actionItems.push({
      actionItems:""
     
    });
  }
  save(save:actionItems,index:number)
  {
    console.log(save,index);
  }

}
