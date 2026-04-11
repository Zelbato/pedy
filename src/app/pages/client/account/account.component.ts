import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-account',
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  constructor(
    private router: Router,
  ) { }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
    console.log('Sessão encerrada. Até logo!');
  }

  excluirConta(): void {
    const confirmacao = confirm("TEM CERTEZA? Isso apagará todos os seus dados permanentemente.");

    if (confirmacao) {
      console.log('Conta excluída do banco de dados.');
      this.logout();
    }
  }

}
