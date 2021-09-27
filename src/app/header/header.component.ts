import { Component, Input, OnInit } from '@angular/core';
import { BlockData } from '../models/blockdata.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  blockData!: BlockData;
  constructor() { }

  ngOnInit(): void {
  }

  addCard()
  {
    
  }
}
