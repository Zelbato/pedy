import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppComponent } from '../../../app.component';
import { AppIconComponent } from "../../../shared/icon/icon.component";
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AppComponent, AppIconComponent, NgxMaskDirective],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  step = 1;
  isLoading = false;
  acceptedTerms = false;
  showPassword = false;

  name: string = '';
  email: string = '';
  password: string = '';


  constructor(private router: Router) { }

  nextStep(event: Event) {
    event.preventDefault();
    if (!this.acceptedTerms) return;

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.step = 2;
    }, 800);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  registerLocation(event: Event) {
    event.preventDefault();

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/login']);
    }, 1000);
  }

  back() {
    this.step = 1;
  }
}