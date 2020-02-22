import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPinkyComponent } from './signup-pinky.component';

describe('SignupPinkyComponent', () => {
  let component: SignupPinkyComponent;
  let fixture: ComponentFixture<SignupPinkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPinkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPinkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
