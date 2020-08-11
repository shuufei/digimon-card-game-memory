import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTurnLabelComponent } from './your-turn-label.component';

describe('YourTurnLabelComponent', () => {
  let component: YourTurnLabelComponent;
  let fixture: ComponentFixture<YourTurnLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTurnLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTurnLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
