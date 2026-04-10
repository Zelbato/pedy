import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPaymentsComponent } from './saved-payments.component';

describe('SavedPaymentsComponent', () => {
  let component: SavedPaymentsComponent;
  let fixture: ComponentFixture<SavedPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
