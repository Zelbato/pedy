
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../../shared/icon/icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-loyalty',
  standalone: true,
  imports: [CommonModule, AppIconComponent, RouterModule],
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})
export class LoyaltyComponent implements OnInit {

  loyaltyPoints: number = 7; // exemplo
  showCongrats: boolean = false;

  loyaltyHistory = [
    { id: 1, date: '05 Abr, 2026', points: '+1', description: 'Compra: Açaí Médio' },
    { id: 2, date: '02 Abr, 2026', points: '+1', description: 'Compra: Açaí Grande' },
    { id: 3, date: '30 Mar, 2026', points: '+1', description: 'Compra: Milkshake Ninho' },
  ];

  ngOnInit() {
    if (this.loyaltyPoints === 10) {
      this.showCongrats = true;
    }
  }

  redeemPoints() {
    this.loyaltyPoints = 0;
    this.showCongrats = false;
  }

}

