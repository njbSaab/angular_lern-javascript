import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShopCardComponent } from './shop-card/shop-card.component';

@NgModule({
  declarations: [AppComponent, ShopCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
// @ts-ignore
export class AppModule {}
