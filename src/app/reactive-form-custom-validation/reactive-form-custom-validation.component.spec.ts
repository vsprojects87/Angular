import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCustomValidationComponent } from './reactive-form-custom-validation.component';

describe('ReactiveFormCustomValidationComponent', () => {
  let component: ReactiveFormCustomValidationComponent;
  let fixture: ComponentFixture<ReactiveFormCustomValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormCustomValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormCustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
