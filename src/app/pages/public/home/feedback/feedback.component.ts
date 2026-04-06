import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feedback {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbacks: Feedback[] = [
    {
      id: 1,
      name: 'Ana Carolina',
      avatar: 'https://i.pravatar.cc/100?img=10',
      comment: 'O melhor açaí que já comi na vida! A entrega foi super rápida e chegou geladinho. Recomendo o de Ninho!',
      rating: 5
    },
    {
      id: 2,
      name: 'João Pedro',
      avatar: 'https://i.pravatar.cc/100?img=12',
      comment: 'Sensacional! O creme de cupuaçu é muito cremoso e as frutas estavam super frescas. Nota 10.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mariana Silva',
      avatar: 'https://i.pravatar.cc/100?img=5',
      comment: 'A embalagem é linda e o açaí não derrete no caminho. Ganharam uma cliente fiel!',
      rating: 5
    },
    {
      id: 4,
      name: 'Ricardo Souza',
      avatar: 'https://i.pravatar.cc/100?img=33',
      comment: 'O adicional de Nutella é generoso, diferente de outros lugares. Vale cada centavo.',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
  get duplicatedFeedbacks(): Feedback[] {
    return [...this.feedbacks, ...this.feedbacks];
  }
}