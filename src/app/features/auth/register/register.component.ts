import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { AppIconComponent } from "../../../shared/icon/icon.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, AppComponent, AppIconComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  isLoading = false;

  constructor(private router: Router) { }

  handleRegister(event: Event) {
    event.preventDefault();
    this.isLoading = true;

    setTimeout(() => {
      localStorage.setItem('user_logged_in', 'true');
      this.isLoading = false;
      this.router.navigate(['/']);
      window.dispatchEvent(new Event('storage'));
    }, 1000);
  }
}