import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import {
  LucideAngularModule, Star, Sparkles, Award, Info,
  History, Gift, ChevronRight, ArrowLeft, Zap, Trophy, Heart
} from 'lucide-angular';

@Component({
  selector: 'app-loyalty',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss'],
  animations: [
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('overlayAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoyaltyComponent implements OnInit {
  readonly Star = Star;
  readonly Sparkles = Sparkles;
  readonly Award = Award;
  readonly Info = Info;
  readonly History = History;
  readonly Gift = Gift;
  readonly ChevronRight = ChevronRight;
  readonly ArrowLeft = ArrowLeft;
  readonly Zap = Zap;
  readonly Trophy = Trophy;
  readonly Heart = Heart;

  loyaltyPoints = 8;
  showCongrats = false;
  progressPercentage = 0;
  pointsArray = Array(10).fill(0);

  loyaltyHistory = [
    { id: 1, date: '08 Abr, 2026', points: '+1', description: 'Compra: Açaí Premium G', type: 'purchase' },
    { id: 2, date: '05 Abr, 2026', points: '+1', description: 'Compra: Copo Personalizado', type: 'purchase' },
    { id: 3, date: '02 Abr, 2026', points: '+1', description: 'Compra: Milkshake Ninho', type: 'purchase' },
    { id: 4, date: '28 Mar, 2026', points: '+1', description: 'Bônus: Primeira Compra', type: 'bonus' },
  ];

  ngOnInit() {
    this.progressPercentage = (this.loyaltyPoints / 10) * 100;
    if (this.loyaltyPoints === 10) {
      setTimeout(() => this.showCongrats = true, 500);
    }
  }

  resetPoints() {
    this.loyaltyPoints = 0;
    this.progressPercentage = 0;
    this.showCongrats = false;
  }
}