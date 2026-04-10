import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../../../../shared/icon/icon.component';

@Component({
  selector: 'app-confirm-payments-modal',
  imports: [CommonModule, AppIconComponent],
  templateUrl: './confirm-payments-modal.component.html',
  styleUrl: './confirm-payments-modal.component.scss'
})
export class PaymentsConfirmComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
