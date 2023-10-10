import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnswerPageComponent } from './form-answer-page.component';

describe('FormAnswerPageComponent', () => {
  let component: FormAnswerPageComponent;
  let fixture: ComponentFixture<FormAnswerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnswerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAnswerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
