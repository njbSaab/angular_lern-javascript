import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { CategoryProductComponent } from './product-card.component';
import { oneProduct } from '../../../../../../../shared/mocks/6-routing/product-information';
import { RouterTestingModule } from '@angular/router/testing';

describe('[Moдуль 6 - Компонент товара]', () => {
  let fixture: ComponentFixture<CategoryProductComponent>;
  let component: CategoryProductComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryProductComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(CategoryProductComponent);
    component = fixture.componentInstance;
  });

  it('компонент должен иметь метод addToBasket ', () => {
    expect((component as any).addToBasket).toBeTruthy();
  });

  it('компонент должен иметь метод redirectTo ', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('компонент должен иметь свойство product c значением {}', () => {
    expect((component as any).product).toBeDefined();
  });

  it('компонент должен иметь cобственное событие addToCart ', () => {
    expect((component as any).addToCart).toBeTruthy();
    expect((component as any).addToCart).toBeInstanceOf(EventEmitter);
  });

  it('при нажатии на кнопку с селектором .add-to-cart должен вызываться метод  addToBasket и срабатывать собстевнное событие addToCart', () => {
    spyOn(component as any, 'addToBasket').and.callThrough();
    spyOn((component as any)?.addToCart, 'emit').and.callThrough();
    const incrementButton = fixture.debugElement.query(
      By.css('button.add-to-cart')
    );
    incrementButton.triggerEventHandler('click', null);
    expect((component as any)?.addToBasket).toHaveBeenCalledTimes(1);
    expect((component as any)?.addToCart.emit).toHaveBeenCalledTimes(1);
  });

  it('тег c селекторор [.product-img img] должен иметь правильное связывание свойств src и alt', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const imgEl = fixture.debugElement.query(By.css('.product-img img'));
    expect(imgEl).toBeTruthy();
    const { images, name } = (component as any)?.product;
    expect(imgEl.attributes.src).toEqual(images[0].url);
    expect(imgEl.attributes.alt).toEqual(name);
  });

  it('тег с селектором .product-desc .product-name  должен правильно интерполировать свойство name продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-desc .product-name')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });

  it('тег с селектором .product-desc .rate-amount  должен правильно интерполировать свойство feedbacksCount продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-desc .rate-amount')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.feedbacksCount} отзыва`
    );
  });

  it('тег с селектором .product-desc .price-text  должен правильно интерполировать свойство price продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-desc .price-text')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.price}€`
    );
  });

  it('тег с селектором .actions .price-text  должен правильно интерполировать свойство price продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.actions .price-text')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.price}€`
    );
  });
});
