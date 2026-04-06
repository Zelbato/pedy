import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppIconComponent } from '../../../shared/icon/icon.component';
import { RouterModule } from '@angular/router';
import { RouterLink, Route } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, AppIconComponent, RouterModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('scale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {

  loyaltyPoints = 3;
  showCongrats = false;
  isAddAddressOpen = false;
  activeModal: string | null = null;
  passwordStep: 'initial' | 'current' | 'new' = 'initial';
  is2FAEnabled = false;

  newAddress = { type: '', address: '', city: '' };

  recentOrders = [
    { id: '#9821', date: '31 Mar, 2026', status: 'preparing', total: 'R$ 42,90', items: 'Açaí Premium + 3 Adicionais' },
    { id: '#9754', date: '28 Mar, 2026', status: 'delivered', total: 'R$ 35,50', items: 'Sorvete de Pistache' },
    { id: '#9612', date: '25 Mar, 2026', status: 'delivered', total: 'R$ 58,00', items: 'Combo Família Açaí' },
  ];

  savedAddresses = [
    { id: 1, type: 'Casa', address: 'Rua das Delícias, 123', city: 'São Paulo/SP' },
    { id: 2, type: 'Trabalho', address: 'Av. Paulista, 1000', city: 'São Paulo/SP' },
  ];

  ngOnInit() {
    if (this.loyaltyPoints === 10) {
      this.showCongrats = true;
    }
  }

  addAddress() {
    if (this.newAddress.type && this.newAddress.address && this.newAddress.city) {
      this.savedAddresses.push({
        id: Date.now(),
        ...this.newAddress
      });
      this.newAddress = { type: '', address: '', city: '' };
      this.isAddAddressOpen = false;
    }
  }

  closeModal() {
    this.activeModal = null;
    this.passwordStep = 'initial';
  }

  redeemPoints() {
    this.loyaltyPoints = 0;
    this.showCongrats = false;
  }
}