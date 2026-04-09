import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppIconComponent } from '../../../../../shared/icon/icon.component';

@Component({
  selector: 'app-new-address-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, AppIconComponent],
  templateUrl: './new-address-modal.component.html',
  styleUrls: ['./new-address-modal.component.scss']
})
export class NewAddressModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  newAddress = {
    type: '',
    cep: '',
    bairro: '',
    street: '',
    number: '',
    complement: ''
  };

  onClose() {
    this.close.emit();
    this.resetForm();
  }

  onSave() {
    // Validação simples: campos obrigatórios
    if (this.newAddress.cep && this.newAddress.street && this.newAddress.number) {
      this.save.emit({ ...this.newAddress });
      this.onClose();
    }
  }

  private resetForm() {
    this.newAddress = { type: '', cep: '', bairro: '', street: '', number: '', complement: '' };
  }
}