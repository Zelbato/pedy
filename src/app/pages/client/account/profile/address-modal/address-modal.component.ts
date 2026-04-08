import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './address-modal.component.html',
  styleUrl: './address-modal.component.scss'
})
export class AddressModalComponent {

  @Input() newAddress!: { type: string; address: string; city: string };

  @Output() save = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
}