import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppComponent } from '../../../app.component';
import { AppIconComponent } from "../../../shared/icon/icon.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, AppComponent, AppIconComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  isLoading = false;
  showPassword = false;

  constructor(private router: Router) { }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  handleLogin(): void {
    this.isLoading = true;

    setTimeout(() => {
      localStorage.setItem('user_logged_in', 'true');
      this.isLoading = false;
      this.router.navigate(['/']);
      window.dispatchEvent(new Event('storage'));
    }, 1000);
  }
}