import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms-content-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-content-modal.component.html',
  styleUrl: './terms-content-modal.component.scss'
})
export class TermsContentModalComponent {
  readonly sections = [
    {
      title: '1. Aceitação',
      paragraphs: [
        'Ao usar o Panda App, você concorda com estes termos de uso e com a nossa política de privacidade.',
        'Se você não concordar com qualquer uma das condições descritas aqui, o uso da plataforma deve ser interrompido.'
      ]
    },
    {
      title: '2. Cadastro e conta',
      paragraphs: [
        'Você é responsável por manter seus dados atualizados e por preservar a confidencialidade do acesso à sua conta.',
        'Qualquer atividade realizada com suas credenciais será considerada de sua responsabilidade.'
      ]
    },
    {
      title: '3. Pedidos e pagamentos',
      paragraphs: [
        'Os pedidos realizados no aplicativo estão sujeitos à confirmação de disponibilidade, endereço de entrega e aprovação do pagamento.',
        'Os valores, prazos e condições promocionais podem ser alterados sem aviso prévio.'
      ]
    },
    {
      title: '4. Privacidade',
      paragraphs: [
        'Os dados coletados são usados para processar pedidos, melhorar sua experiência e cumprir obrigações legais e operacionais.',
        'Não compartilhamos informações pessoais fora das hipóteses previstas em lei ou necessárias para a prestação do serviço.'
      ]
    },
    {
      title: '5. Alterações',
      paragraphs: [
        'Estes termos podem ser atualizados periodicamente. Recomendamos a revisão deste conteúdo sempre que houver uma nova versão disponível.'
      ]
    }
  ];
}
