import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/public/home/home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-client-layout',
  imports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss'
})
export class ClientLayoutComponent {
  showLayout = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.showLayout = !(event.url === '/login' || event.url === '/register');
    });
  }
}
