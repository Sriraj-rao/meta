import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BlockData } from '../models/blockdata.model';
import { improveData } from '../models/improve.model';

@Component({
  selector: 'app-what-went-well',
  templateUrl: './what-went-well.component.html',
  styleUrls: ['./what-went-well.component.scss']
})
export class WhatWentWellComponent implements OnInit {
  blocks: BlockData[] = [];
  // improve:improveData[] = [];


  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    // this.empForm = this.fb.group({
    //   employees: this.fb.array([])
    // });
    this.blocks = [];
  }

  save(save:BlockData,index:number)
  {
    console.log(save,index);
  }
  addCard() {
    this.blocks.push({
      opinions:""
     
    });
  }

  clearWwwCards() {
    this.blocks.length = 0;
  }
  }

 





