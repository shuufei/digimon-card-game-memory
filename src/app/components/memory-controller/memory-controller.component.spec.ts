import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryControllerComponent } from './memory-controller.component';

describe('MemoryControllerComponent', () => {
  let component: MemoryControllerComponent;
  let fixture: ComponentFixture<MemoryControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
