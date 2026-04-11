import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  scale = 1;
  opacity = 1;

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;

    const maxScroll = 400;

    let progress = scrollY / maxScroll;
    if (progress > 1) progress = 1;

    const ease = 1 - Math.pow(1 - progress, 3);

    this.scale = 1 - (ease * 0.08);

    this.opacity = 1 - (ease * 0.15);
  }
}
