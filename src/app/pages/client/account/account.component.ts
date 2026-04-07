import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppIconComponent } from '../../../shared/icon/icon.component';

@Component({
  selector: 'app-account',
  imports: [RouterModule, AppIconComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

}
