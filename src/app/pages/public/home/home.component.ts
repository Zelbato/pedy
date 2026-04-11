import { Component } from '@angular/core';
// import { AppComponent } from "../app.component";
import { HeaderComponent } from '../../../shared/header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from "../../../shared/footer/footer.component";
import { FeedbackComponent } from './feedback/feedback.component';
import { SignupOffersComponent } from './signup-offers/signup-offers.component';
// import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, MenuComponent, AboutComponent, FeedbackComponent, FooterComponent, SignupOffersComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
