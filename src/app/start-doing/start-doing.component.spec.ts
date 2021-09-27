import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDoingComponent } from './start-doing.component';

describe('StartDoingComponent', () => {
  let component: StartDoingComponent;
  let fixture: ComponentFixture<StartDoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
