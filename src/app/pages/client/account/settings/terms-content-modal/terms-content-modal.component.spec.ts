import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsContentModalComponent } from './terms-content-modal.component';

describe('TermsContentModalComponent', () => {
  let component: TermsContentModalComponent;
  let fixture: ComponentFixture<TermsContentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsContentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
