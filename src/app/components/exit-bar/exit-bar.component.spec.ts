import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitBarComponent } from './exit-bar.component';

describe('ExitBarComponent', () => {
  let component: ExitBarComponent;
  let fixture: ComponentFixture<ExitBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
