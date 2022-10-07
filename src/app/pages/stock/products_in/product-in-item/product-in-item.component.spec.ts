import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInItemComponent } from './product-in-item.component';

describe('ProductInItemComponent', () => {
  let component: ProductInItemComponent;
  let fixture: ComponentFixture<ProductInItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
