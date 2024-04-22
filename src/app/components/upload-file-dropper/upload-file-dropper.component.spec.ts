import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileDropperComponent } from './upload-file-dropper.component';

describe('UploadFileDropperComponent', () => {
  let component: UploadFileDropperComponent;
  let fixture: ComponentFixture<UploadFileDropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadFileDropperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadFileDropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
