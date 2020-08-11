import { Component, OnInit, ChangeDetectionStrategy, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

type Button = {
  label: string;
  value: number;
}

@Component({
  selector: 'dig-memory-controller',
  templateUrl: './memory-controller.component.html',
  styleUrls: ['./memory-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemoryControllerComponent implements OnInit, AfterViewInit {
  @Input() disable = false;
  @Output() clickedMemory = new EventEmitter<number>();

  readonly minusButtonList: Button[] = Array.from(Array(15), (_, i) => ({ label: `-${i + 1}`, value: - i - 1 })).reverse();
  readonly plusButtonList: Button[] = Array.from(Array(15), (_, i) => ({ label: `+${i + 1}`, value: i + 1 }));

  constructor(
    private hostEl: ElementRef
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const rect = (this.hostEl.nativeElement as HTMLElement).getBoundingClientRect();
      const scrollWidth = (this.hostEl.nativeElement as HTMLElement).scrollWidth;
      (this.hostEl.nativeElement as HTMLElement).scrollTo((scrollWidth / 2) - (rect.width / 2), 0);
    });
  }

}
