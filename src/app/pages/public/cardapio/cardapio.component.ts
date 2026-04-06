import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PRODUCTS, CUSTOM_CUP_OPTIONS } from '../../../core/constants/product';

type Category = 'sorvete' | 'açai' | 'milkshake' | 'picole' | 'pote';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
}

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent {

  constructor(private router: Router) { }


  categories: { id: Category | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos' },
    { id: 'sorvete', label: 'Sorvetes' },
    { id: 'açai', label: 'Açaí' },
    { id: 'milkshake', label: 'Milkshakes' },
    { id: 'picole', label: 'Picolés' },
    { id: 'pote', label: 'Potes' },
  ];

  activeCategory: Category | 'all' = 'all';
  searchQuery = '';


  products: any[] = PRODUCTS;

  get filteredProducts(): Product[] {

    return this.products.filter(product => {

      const matchesCategory =
        this.activeCategory === 'all' ||
        product.category === this.activeCategory;

      const matchesSearch =
        product.name.toLowerCase()
          .includes(this.searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;

    });

  }

  handleCustomBuy() {
    const customOrder = {
      type: this.customType,
      size: this.customSize,
      ingredients: this.selectedIngredients,
      total: this.customTotal
    };

    this.router.navigate(['/payment', 'custom'], {
      state: { data: customOrder }
    });
  }

  handleBuy(productId: string) {
    this.router.navigate(['/payment', productId]);
  }


  customTypes = CUSTOM_CUP_OPTIONS.types;
  customSizes = CUSTOM_CUP_OPTIONS.sizes;
  ingredients = CUSTOM_CUP_OPTIONS.ingredients;

  customType = this.customTypes[0];
  customSize = this.customSizes[0];

  selectedIngredients: any[] = [];

  toggleIngredient(ingredient: any) {

    const exists = this.selectedIngredients.find(
      i => i.id === ingredient.id
    );

    if (exists) {

      this.selectedIngredients =
        this.selectedIngredients.filter(
          i => i.id !== ingredient.id
        );

      return;

    }

    if (this.selectedIngredients.length < 3) {
      this.selectedIngredients.push(ingredient);
    }

  }

  isSelected(ingredient: any): boolean {

    return this.selectedIngredients.some(
      i => i.id === ingredient.id
    );

  }

  get customTotal(): number {

    const basePrice =
      this.customType.price *
      this.customSize.multiplier;

    const ingredientsPrice =
      this.selectedIngredients.reduce(
        (acc, curr) => acc + curr.price,
        0
      );

    return basePrice + ingredientsPrice;

  }
}
