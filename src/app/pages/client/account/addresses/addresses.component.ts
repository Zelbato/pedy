import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppIconComponent } from '../../../../shared/icon/icon.component';
import { NewAddressModalComponent } from './new-address-modal/new-address-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, FormsModule, AppIconComponent, NewAddressModalComponent, ConfirmModalComponent],
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent {
  addresses = [
    { id: 1, type: 'Casa', address: 'Rua das Flores, 123', city: 'São Paulo/SP' },
    { id: 2, type: 'Trabalho', address: 'Av. Paulista, 1500', city: 'São Paulo/SP' }
  ];

  primaryAddressId = 1;
  isAddModalOpen = false;
  isConfirmModalOpen = false;
  pendingPrimaryId: number | null = null;

  newAddress = { type: '', address: '', city: '' };

  toggleAddModal() {
    this.isAddModalOpen = !this.isAddModalOpen;
    if (!this.isAddModalOpen) this.resetForm();
  }

  openConfirmModal(id: number) {
    if (id === this.primaryAddressId) return;
    this.pendingPrimaryId = id;
    this.isConfirmModalOpen = true;
  }

  confirmPrimaryChange() {
    if (this.pendingPrimaryId !== null) {
      this.primaryAddressId = this.pendingPrimaryId;
      this.isConfirmModalOpen = false;
      this.pendingPrimaryId = null;
    }
  }

  handleAddAddress(data: any) {
    if (data.type && data.address && data.city) {
      const id = this.addresses.length > 0
        ? Math.max(...this.addresses.map(a => a.id)) + 1
        : 1;

      this.addresses.push({ id, ...data });

      this.isAddModalOpen = false;
    }
  }

  deleteAddress(id: number) {
    this.addresses = this.addresses.filter(a => a.id !== id);
  }

  resetForm() {
    this.newAddress = { type: '', address: '', city: '' };
  }
}