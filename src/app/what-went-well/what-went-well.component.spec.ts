import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWentWellComponent } from './what-went-well.component';

describe('WhatWentWellComponent', () => {
  let component: WhatWentWellComponent;
  let fixture: ComponentFixture<WhatWentWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWentWellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWentWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
