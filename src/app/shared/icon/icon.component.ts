import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class AppIconComponent {

  @Input() name: string = '';
  @Input() size: number = 24;
  @Input() filled: boolean = false;
}