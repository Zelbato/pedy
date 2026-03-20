import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icon.component.map';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class AppIconComponent implements OnChanges {
  @Input() name!: string;
  @Input() size: number = 24;

  svgIcon: SafeHtml | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] && this.name) {
      const svg = ICONS[this.name];
      this.svgIcon = svg ? this.sanitizer.bypassSecurityTrustHtml(svg) : null;
    }
  }
}