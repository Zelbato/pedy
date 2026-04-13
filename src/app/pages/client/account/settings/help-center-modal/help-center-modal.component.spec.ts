import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterModalComponent } from './help-center-modal.component';

describe('HelpCenterModalComponent', () => {
  let component: HelpCenterModalComponent;
  let fixture: ComponentFixture<HelpCenterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCenterModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpCenterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
