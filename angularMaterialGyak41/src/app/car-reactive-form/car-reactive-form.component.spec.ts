import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReactiveFormComponent } from './car-reactive-form.component';

describe('CarReactiveFormComponent', () => {
  let component: CarReactiveFormComponent;
  let fixture: ComponentFixture<CarReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarReactiveFormComponent]
    });
    fixture = TestBed.createComponent(CarReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
