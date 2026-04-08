import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.scss'
})
export class InfoModalComponent {

  @Output() close = new EventEmitter<void>();
  
}
