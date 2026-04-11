import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOffersComponent } from './signup-offers.component';

describe('SignupOffersComponent', () => {
  let component: SignupOffersComponent;
  let fixture: ComponentFixture<SignupOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
