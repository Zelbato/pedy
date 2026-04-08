import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-modal.component.html',
  styleUrl: './security-modal.component.scss'
})
export class SecurityModalComponent {

  @Input() passwordStep: 'initial' | 'current' | 'new' = 'initial';
  @Input() is2FAEnabled: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() toggle2FA = new EventEmitter<void>();
  @Output() changeStep = new EventEmitter<'initial' | 'current' | 'new'>();
}