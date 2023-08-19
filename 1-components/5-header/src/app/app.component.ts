import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = '1. Интерполяция и связывание (Header)';
  public terminalMessage: string;
  public goToBasket() {
    this.terminalMessage = 'Переход в компонент корзины';
  }
}
