import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCyclesComponent } from './product-cycles.component';

describe('ProductCyclesComponent', () => {
  let component: ProductCyclesComponent;
  let fixture: ComponentFixture<ProductCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCyclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
