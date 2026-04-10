import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPaymentsModalComponent } from './confirm-payments-modal.component';

describe('ConfirmPaymentsModalComponent', () => {
  let component: ConfirmPaymentsModalComponent;
  let fixture: ComponentFixture<ConfirmPaymentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmPaymentsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmPaymentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
