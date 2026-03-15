import { Product } from "../models/product.model";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Açaí com Creme de Ninho',
    description: 'Delicioso doce feito com açaí, ninho, leite em pó e leite condensado.',
    price: 12.9,
    image: 'assets/img/açai-01.png'
  },
  {
    id: 2,
    name: 'Milkshake com Oreo',
    description: 'Milkshake cremoso com pedaços de oreo.',
    price: 18.5,
    image: 'assets/img/milk-01.png'
  },
  {
    id: 3,
    name: 'Sorvete de Morango',
    description: 'Sorvete cremoso artesanal de morango.',
    price: 9.9,
    image: 'assets/img/sorvete_morango.jpg'
  },
];
