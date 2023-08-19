import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CategoryProductComponent } from './product-card/product-card.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent, CategoryProductComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
