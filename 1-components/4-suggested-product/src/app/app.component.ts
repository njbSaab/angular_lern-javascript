import { Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/1-components/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public terminalMessage: string;
  public title = '1. Интерполяция и связывание (Карточка товара на главной странице)';
  public product = oneProduct;

  public goToProduct() {
    this.terminalMessage = 'Переход на компонент продукта';
  }
}
