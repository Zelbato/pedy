import { Order } from "../models/orders.model";

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'PED-001',
    date: '24/03/2026',
    customerName: 'João Silva',
    destination: 'Rua A, 123 - Centro',
    total: 89.90,
    status: 'Preparando'
  },
  {
    id: 'PED-002',
    date: '23/03/2026',
    customerName: 'Maria Souza',
    destination: 'Av. Brasil, 456',
    total: 120.00,
    status: 'Em rota'
  },
  {
    id: 'PED-003',
    date: '22/03/2026',
    customerName: 'Carlos Lima',
    destination: 'Rua das Flores, 789',
    total: 45.50,
    status: 'Entregue'
  }
];