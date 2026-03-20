import { Component } from '@angular/core';
import { AppIconComponent } from '../../shared/icon/icon.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [
    AppIconComponent,
    CommonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
