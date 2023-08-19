import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../../shared/mocks/3-directives/categories';


@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
// @ts-ignore
export class SideMenuComponent {
  @Input()
  // @ts-ignore
  public categories: ICategory[] = [];

  @Output()
  // @ts-ignore
  public categoryChange: EventEmitter<string> = new EventEmitter();

  public currentName: string | null = null;

  public hover(name: string): void {
    this.currentName = name;
  }

  public mouseLeave(): void {
    this.currentName = null;
  }

  public redirectTo(subCategory: string): void {
    this.categoryChange.emit(subCategory);
  }
}
