import { Component, Input, OnInit } from '@angular/core';
import { BlockData } from '../models/blockdata.model';

@Component({
  selector: 'app-what-went-well',
  templateUrl: './what-went-well.component.html',
  styleUrls: ['./what-went-well.component.scss']
})
export class WhatWentWellComponent implements OnInit {
  @Input()
  blockData!: BlockData;

  constructor() { }

  ngOnInit(): void {
  }

}
