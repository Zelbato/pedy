import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
// import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule,
  
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

  @ViewChild('aboutImage') aboutImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.aboutImage.nativeElement);
  }

  // floatingState = false;

  // onAnimationDone() {
  //   this.floatingState = !this.floatingState;
  // }

}
