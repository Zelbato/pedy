import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { PaymentsModalComponent } from './payments-modal/payments-modal.component';
import { PaymentsConfirmComponent } from './confirm-payments-modal/confirm-payments-modal.component';

@Component({
  selector: 'app-saved-payments',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, PaymentsModalComponent, PaymentsConfirmComponent],
  templateUrl: './saved-payments.component.html',
  styleUrls: ['./saved-payments.component.scss']
})
export class SavedPaymentsComponent {
  isAddModalOpen = false;
  isConfirmModalOpen = false;
  pendingPrimaryId: number | null = null;
  primaryCardId = 1;

  cards = [
    { id: 1, type: 'credit', brand: 'Visa', name: 'JOÃO SILVA', number: '**** **** **** 4242', expiry: '12/28' }
  ];

  newCard = {
    type: 'credit' as 'credit' | 'debit',
    brand: 'Visa',
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  };

  handleAddCard(cardData: any) {
    const rawNumber = cardData.number.replace(/\s+/g, '');

    if (rawNumber.length >= 13) {
      const lastFour = cardData.number.toString().replace(/\D/g, '').slice(-4)
      const newCard = {
        ...cardData,
        id: Date.now(),
        number: `**** **** **** ${lastFour}`
      };

      this.cards.push(newCard);
      this.isAddModalOpen = false;
    }
  }

  handleConfirmPrimary() {
    if (this.pendingPrimaryId !== null) {
      this.primaryCardId = this.pendingPrimaryId;
      this.isConfirmModalOpen = false;
      this.pendingPrimaryId = null;
      console.log('Cartão padrão atualizado para ID:', this.primaryCardId);
    }
  }

  openConfirmModal(id: number) {
    if (id === this.primaryCardId) return;
    this.pendingPrimaryId = id;
    this.isConfirmModalOpen = true;
  }

  confirmPrimaryChange() {
    if (this.pendingPrimaryId !== null) {
      this.primaryCardId = this.pendingPrimaryId;
      this.isConfirmModalOpen = false;
      this.pendingPrimaryId = null;
    }
  }

  deleteCard(id: number) {
    this.cards = this.cards.filter(c => c.id !== id);
  }

  closeAddModal() {
    this.isAddModalOpen = false;
    this.newCard = { type: 'credit', brand: 'Visa', name: '', number: '', expiry: '', cvv: '' };
  }
}
