import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    // private ngSelectConfig: NgSelectConfig
  ) {
    // this.ngSelectConfig.notFoundText = 'Nenhum item encontrado';
    // this.ngSelectConfig.loadingText = "Carregando..."
    // this.ngSelectConfig.appearance = 'outline';
    // this.ngSelectConfig.appendTo = 'body';
  }
}
