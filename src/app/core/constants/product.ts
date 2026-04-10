import { Product } from "../models/product.model";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Açaí com Creme de Ninho',
    description: 'Delicioso doce feito com açaí, ninho, leite em pó e leite condensado.',
    price: 12.9,
    category: 'açai',
    image: 'assets/img/img-illustre.png'
  },
  {
    id: 2,
    name: 'Milkshake com Oreo',
    description: 'Milkshake cremoso com pedaços de oreo.',
    price: 18.5,
    category: 'milkshake',
    image: 'assets/img/img-illustre-2.png'
  },
  {
    id: 3,
    name: 'Sorvete de Morango',
    description: 'Sorvete cremoso artesanal de morango.',
    price: 9.9,
    category: 'sorvete',
    image: 'assets/img/img-illustre-3.png'
  },
];


export const CUSTOM_CUP_OPTIONS = {
  types: [
    { id: 'açai', label: 'Açaí', price: 15.00 },
    { id: 'sorvete', label: 'Sorvete', price: 12.00 },
    { id: 'milkshake', label: 'Milkshake', price: 18.00 },
  ],
  sizes: [
    { id: '300ml', label: '300ml', multiplier: 1 },
    { id: '500ml', label: '500ml', multiplier: 1.5 },
    { id: '700ml', label: '700ml', multiplier: 2 },
  ],
  ingredients: [
    { id: 'leite-po', label: 'Leite em Pó', price: 3.00 },
    { id: 'granola', label: 'Granola', price: 2.00 },
    { id: 'banana', label: 'Banana', price: 2.50 },
    { id: 'morango', label: 'Morango', price: 4.00 },
    { id: 'nutella', label: 'Nutella', price: 6.00 },
    { id: 'leite-condensado', label: 'Leite Condensado', price: 3.00 },
    { id: 'paçoca', label: 'Paçoca', price: 2.00 },
    { id: 'mms', label: 'M&Ms', price: 4.50 },
  ]
};
