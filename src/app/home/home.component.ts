import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
