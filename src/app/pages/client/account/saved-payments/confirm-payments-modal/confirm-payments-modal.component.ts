import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-confirm-payments-modal',
  imports: [CommonModule, LucideAngularModule],
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
