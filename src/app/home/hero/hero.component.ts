import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppIconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule,
    RouterModule,
    AppIconComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  scale = 1;
  opacity = 1;

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;

    const maxScroll = 400; // 🔥 aumenta pra suavizar

    // progresso de 0 a 1
    let progress = scrollY / maxScroll;
    if (progress > 1) progress = 1;

    // 🔥 easing suave (easeOutCubic)
    const ease = 1 - Math.pow(1 - progress, 3);

    // 🔥 escala mais sutil (quase imperceptível, premium)
    this.scale = 1 - (ease * 0.08); // vai até ~0.92

    // 🔥 opacity bem leve
    this.opacity = 1 - (ease * 0.15); // vai até ~0.85
  }
}
