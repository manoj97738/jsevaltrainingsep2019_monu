import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMinkyComponent } from './signup-minky.component';

describe('SignupMinkyComponent', () => {
  let component: SignupMinkyComponent;
  let fixture: ComponentFixture<SignupMinkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupMinkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMinkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
