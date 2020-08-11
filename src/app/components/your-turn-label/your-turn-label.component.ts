import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dig-your-turn-label',
  templateUrl: './your-turn-label.component.html',
  styleUrls: ['./your-turn-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YourTurnLabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
