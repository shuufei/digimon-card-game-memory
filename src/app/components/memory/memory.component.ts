import { Component, OnInit, ChangeDetectionStrategy, Input, AfterViewInit, ElementRef, Output, EventEmitter, OnChanges, SimpleChanges, ViewChildren } from '@angular/core';

import { Player } from 'src/app/types/player';

export type ChangeMemoryEvent = { memory: number; player: Player };

@Component({
  selector: 'dig-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoryComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() currentMemory = 0;
  @Input() currentPlayer: Player = 'player1';
  @Input() player1Color = '#D50001';
  @Input() player2Color = '#189fed';
  @Output() changeMemory = new EventEmitter<ChangeMemoryEvent>();
  @ViewChildren('memoryButtons') memoryButtonEls: ElementRef[] = [];

  readonly memory: { value: number; role: Player }[] = [
    ...Array.from(Array(10), (_, i) => ({ value: i + 1, role: 'player2' as Player })).reverse(),
    { value: 0, role: 'player1' },
    ...Array.from(Array(10), (_, i) => ({ value: i + 1, role: 'player1' as Player }))
  ];

  constructor(
    private hostEl: ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setScrollPosition();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const scrollWidth = (this.hostEl.nativeElement as HTMLElement).scrollWidth;
      this.scroll(scrollWidth / 2);
    });
  }

  private setScrollPosition(): void {
    const button = this.memoryButtonEls.map(v => v)[0];
    const index = this.memory.findIndex(v => v.role === this.currentPlayer && v.value === this.currentMemory);
    if (index < 0 || button == null) {
      return;
    }
    const rect = (button.nativeElement as HTMLElement).getBoundingClientRect();
    const basePosition = (rect.width + 8) * (index + 1) + 32 - (rect.width / 2 + 4);
    setTimeout(() => {
      this.scroll(basePosition);
    }, 500);
  }

  private scroll(basePosition: number): void {
    const hostRect = (this.hostEl.nativeElement as HTMLElement).getBoundingClientRect();
    (this.hostEl.nativeElement as HTMLElement).scrollTo(basePosition - (hostRect.width / 2), 0);
  }

}
