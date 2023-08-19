import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-shop-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class FooterComponent {
  public author = 'Angular Course';
  public currentYear: number = new Date().getFullYear();
}
