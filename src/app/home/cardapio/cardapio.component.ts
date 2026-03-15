import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

type Category = 'all' | 'sorvete' | 'açai' | 'milkshake' | 'picole' | 'pote';


@Component({
  selector: 'app-cardapio',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.scss'
})
export class CardapioComponent {

  searchQuery: string = '';
  activeCategory: string = 'all';

  categories = [
    { id: 'all', label: 'Todos' },
    { id: 'sorvete', label: 'Sorvetes' },
    { id: 'acai', label: 'Açaí' },
    { id: 'milkshake', label: 'Milkshakes' },
    { id: 'picole', label: 'Picolés' },
    { id: 'pote', label: 'Potes' },
  ];

  products: Product[] = [
    { id: '1', name: 'Sorvete Chocolate', description: 'Delicioso sorvete', category: 'sorvete', price: 12.5, image: 'assets/img/sorvete1.jpg' },
    { id: '2', name: 'Açaí com Granola', description: 'Açaí fresco com granola', category: 'acai', price: 18, image: 'assets/img/acai1.jpg' },
    { id: '3', name: 'Milkshake Morango', description: 'Milkshake cremoso', category: 'milkshake', price: 15, image: 'assets/img/milkshake1.jpg' },
  ];

  selectCategory(catId: string) {
    this.activeCategory = catId;
  }


  filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesCategory = this.activeCategory === 'all' || product.category === this.activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  handleBuy(productId: string) {
    console.log('Comprar produto', productId);
    // Se você tiver rota de pagamento:
    // this.router.navigate([`/pagamento/${productId}`]);
  }

}
