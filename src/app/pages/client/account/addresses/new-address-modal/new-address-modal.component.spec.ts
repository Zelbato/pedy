import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddressModalComponent } from './new-address-modal.component';

describe('NewAddressModalComponent', () => {
  let component: NewAddressModalComponent;
  let fixture: ComponentFixture<NewAddressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAddressModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
