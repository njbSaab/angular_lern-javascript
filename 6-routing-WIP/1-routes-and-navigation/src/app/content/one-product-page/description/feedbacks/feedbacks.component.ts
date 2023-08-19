import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFeedback } from '../../../../../../../../shared/mocks/6-routing/products';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
export class FeedbacksComponent {
  @Input()
  public feedbacks: IFeedback[] = [];
  @Output()
  public addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();
  public addNewFeedback(): void {
    this.addFeedbackEvent.emit('отзыв добавлен');
  }
}
