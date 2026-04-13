import { Component, ChangeDetectorRef } from '@angular/core';
import { LucideAngularModule, ChevronDown, MessageSquare, Mail } from 'lucide-angular';

@Component({
  selector: 'app-help-center-modal',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './help-center-modal.component.html',
  styleUrls: ['./help-center-modal.component.scss']
})
export class HelpCenterModalComponent {
  readonly ChevronDown = ChevronDown;
  readonly MessageSquare = MessageSquare;
  readonly Mail = Mail;

  openFaq: number | null = null;

  constructor(private cdr: ChangeDetectorRef) { }

  toggleFaq(id: number) {
    this.openFaq = this.openFaq === id ? null : id;
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }
}