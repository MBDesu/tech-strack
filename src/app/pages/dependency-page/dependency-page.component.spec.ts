import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyPageComponent } from './dependency-page.component';

describe('DependencyPageComponent', () => {
  let component: DependencyPageComponent;
  let fixture: ComponentFixture<DependencyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependencyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DependencyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
