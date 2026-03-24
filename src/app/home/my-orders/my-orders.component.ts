import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INITIAL_ORDERS } from './my-orders.constants';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
  animations: [
    trigger('rowAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class MyOrdersComponent {
  orders = INITIAL_ORDERS;
}