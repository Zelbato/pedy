import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { AppIconComponent } from '../../shared/icon/icon.component';
import { CommonModule } from '@angular/common';
// import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    AppIconComponent,
    CommonModule,
  
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  // animations: [
  //   trigger('float', [
  //     transition('* => *', [ // Qualquer mudança de estado dispara a animação
  //       animate('4s ease-in-out', keyframes([
  //         style({ transform: 'translateY(0)', offset: 0 }),
  //         style({ transform: 'translateY(15px)', offset: 0.5 }),
  //         style({ transform: 'translateY(0)', offset: 1 })
  //       ]))
  //     ])
  //   ])
  // ],
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
