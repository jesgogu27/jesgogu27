import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',//como quiero llamar mi compoente
  template: `<h2>{{ counter }}</h2>

  <button (click)="increaseBy()"> + 1 </button>
  <button (click)="resetear()"> Resetear</button>
  <button (click)="decreaseBy()"> - 1 </button>
  `
})
export class CounterComponent{
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(): void {
    this.counter++;
  }

  decreaseBy(): void {
    this.counter--;
  }

  resetear(): void {
    this.counter = 10;
  }
}


