import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppIconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AppIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.updateUnderline();

    // Atualiza ao trocar rota
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.updateUnderline(), 50);
      });
  }

  @HostListener('window:resize')
  onResize() {
    this.updateUnderline();
  }

  updateUnderline() {
    const active = this.el.nativeElement.querySelector('.menu a.active');
    const underline = this.el.nativeElement.querySelector('.underline');

    if (active && underline) {
      const left = active.offsetLeft;
      const width = active.offsetWidth;

      underline.style.width = width + 'px';
      underline.style.transform = `translateX(${left}px)`;
    }
  }

  scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }
}