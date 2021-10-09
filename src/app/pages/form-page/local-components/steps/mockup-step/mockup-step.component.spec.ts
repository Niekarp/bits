import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupStepComponent } from './mockup-step.component';

describe('MockupStepComponent', () => {
  let component: MockupStepComponent;
  let fixture: ComponentFixture<MockupStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
