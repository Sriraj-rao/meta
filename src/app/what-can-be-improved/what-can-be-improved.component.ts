import { Component, Input, OnInit } from '@angular/core';
import { improveData } from '../models/improve.model';

@Component({
  selector: 'app-what-can-be-improved',
  templateUrl: './what-can-be-improved.component.html',
  styleUrls: ['./what-can-be-improved.component.scss']
})
export class WhatCanBeImprovedComponent implements OnInit {

  @Input()
  improveData!: improveData;
  constructor() { }

  ngOnInit(): void {
  }

}
