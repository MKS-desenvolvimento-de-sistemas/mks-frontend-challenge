import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './src/app/app.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addToCartEvent when addToCart method is called', () => {
    const product = { id: 1, name: 'Test Product', description: 'Test Description', price: 100 };
    spyOn(component.addToCartEvent, 'emit');
    component.addToCart();
    expect(component.addToCartEvent.emit).toHaveBeenCalledWith(product);
  });
});
