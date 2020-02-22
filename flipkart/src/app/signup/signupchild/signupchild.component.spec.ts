import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupchildComponent } from './signupchild.component';

describe('SignupchildComponent', () => {
  let component: SignupchildComponent;
  let fixture: ComponentFixture<SignupchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
