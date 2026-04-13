import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodPaymentModalComponent } from './metod-payment-modal.component';

describe('MetodPaymentModalComponent', () => {
  let component: MetodPaymentModalComponent;
  let fixture: ComponentFixture<MetodPaymentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodPaymentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
