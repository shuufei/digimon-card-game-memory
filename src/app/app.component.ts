import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Player } from './types/player';
import { ChangeMemoryEvent } from './components/memory/memory.component';

@Component({
  selector: 'dig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('exitBar1', { read: ElementRef }) exitBar1!: ElementRef;
  @ViewChild('exitBar2', { read: ElementRef }) exitBar2!: ElementRef;

  currentPlayer: Player = 'player1';
  currentMemory = 0;

  constructor(
  ) {}

  onClickedMemoryOfPlayer1(value: number): void {
    this.changeMemoryAndPlayer(value, 'player2');
  }

  onClickedMemoryOfPlayer2(value: number): void {
    this.changeMemoryAndPlayer(value, 'player1');
  }

  reset(): void {
    this.currentPlayer = 'player1';
    this.currentMemory = 0;
  }

  onChangedMemoryDirectry(event: ChangeMemoryEvent): void {
    this.currentMemory = event.memory;
    this.currentPlayer = event.player;
  }

  private changeMemoryAndPlayer(memory: number, player: Player): void {
    const updatedMemory = this.currentMemory + memory;
    if (updatedMemory < 0) {
      if (updatedMemory < -10) {
        this.currentMemory = 10;
      } else {
        this.currentMemory = Math.abs(updatedMemory);
      }
      this.currentPlayer = player;
    } else {
      if (updatedMemory > 10) {
        this.currentMemory = 10;
      } else {
        this.currentMemory = updatedMemory;
      }
    }
  }

}
