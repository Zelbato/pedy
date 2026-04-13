import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, CreditCard, Plus } from 'lucide-angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-metod-payment-modal',
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './metod-payment-modal.component.html',
  styleUrl: './metod-payment-modal.component.scss'
})
export class MetodPaymentModalComponent {
  readonly close = X;
  readonly CreditCard = CreditCard;
  readonly Plus = Plus;


  
  @Input() activeModal: string | null = null;
}
