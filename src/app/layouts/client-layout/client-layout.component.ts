import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from "@angular/router";

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

}
