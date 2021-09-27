import { Component } from '@angular/core';
import { BlockData } from './models/blockdata.model';
import { improveData } from './models/improve.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meta';

  blocks: BlockData[] = [];
  improve:improveData[] = [];

  ngOnInit() {
    this.blocks = [];
    this.improve = [];
  }

  addCard() {
    this.blocks.push({
      opinions:""
     
    });
  }

  clearWwwCards() {
    this.blocks.length = 0;
  }

  clearWciCards() {
    this.improve.length = 0;
  }

  addWciCard()
  {
    this.improve.push({
      improve:""
     
    });
  }

}
