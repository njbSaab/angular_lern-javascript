import { ProductCardComponent } from './product-card/product-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReviewPipe } from './pipes/review.pipe';
import { ImgUrlPipe } from './pipes/img-url.pipe';
import { RatePipe } from './pipes/rate.pipe';

@NgModule({
  declarations: [AppComponent, ProductCardComponent, ImgUrlPipe, RatePipe, ReviewPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
