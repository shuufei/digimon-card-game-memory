import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dig-exit-bar',
  templateUrl: './exit-bar.component.html',
  styleUrls: ['./exit-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExitBarComponent implements OnInit {
  @Output() clickedExit = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
