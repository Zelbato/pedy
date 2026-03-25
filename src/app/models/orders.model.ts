export interface Order {
    id: string;
    date: string;
    customerName: string;
    destination: string;
    total: number;
    status: 'Recebido' | 'Preparando' | 'Em rota' | 'Entregue';
}