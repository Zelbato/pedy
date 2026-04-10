import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppIconComponent } from '../../../../../shared/icon/icon.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-payments-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective, AppIconComponent],
  providers: [provideNgxMask()],
  templateUrl: './payments-modal.component.html',
  styleUrls: ['./payments-modal.component.scss']
})
export class PaymentsModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  isTypeDropdownOpen = false;
  isBrandDropdownOpen = false;

  card = {
    type: '',
    brand: '',
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  };

  toggleTypeDropdown() {
    this.isTypeDropdownOpen = !this.isTypeDropdownOpen;
    this.isBrandDropdownOpen = false;
  }

  toggleBrandDropdown() {
    this.isBrandDropdownOpen = !this.isBrandDropdownOpen;
    this.isTypeDropdownOpen = false;
  }

  selectType(type: string) {
    this.card.type = type;
    this.isTypeDropdownOpen = false;
  }

  selectBrand(brand: string) {
    this.card.brand = brand;
    this.isBrandDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-select')) {
      this.isTypeDropdownOpen = false;
      this.isBrandDropdownOpen = false;
    }
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.card.type && this.card.brand && this.card.name && this.card.number) {
      this.save.emit(this.card);
    }
  }
}