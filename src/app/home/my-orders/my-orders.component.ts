import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INITIAL_ORDERS } from '../../constants/my-orders';
import { FormsModule } from '@angular/forms';
import { AppIconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, AppIconComponent],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent implements OnInit {

  orders = INITIAL_ORDERS;
  filtered: any[] = [];
  confirmCancelModal = false;
  successModal = false;
  orderToDeleteId: string | null = null;
  selectedOrder: any = null;
  activeMenu: string | null = null;

  filter: 'todos' | 'andamento' | 'concluidos' = 'todos';
  mode: 'view' | 'edit' = 'view';

  ngOnInit() {
    this.applyFilter();
  }

  applyFilter() {
    if (this.filter === 'todos') {
      this.filtered = this.orders;
    } else if (this.filter === 'andamento') {
      this.filtered = this.orders.filter(o =>
        o.status === 'Recebido' ||
        o.status === 'Preparando' ||
        o.status === 'Em rota'
      );
    } else if (this.filter === 'concluidos') {
      this.filtered = this.orders.filter(o => o.status === 'Entregue');
    }
  }

  setFilter(f: 'todos' | 'andamento' | 'concluidos') {
    this.filter = f;
    this.applyFilter();
  }

  clearFilter() {
    this.filter = 'todos';
    this.applyFilter();
  }

  closeModal() {
    this.selectedOrder = null;
  }

  toggleMenu(id: string) {
    this.activeMenu = this.activeMenu === id ? null : id;
  }

  openDetails(order: any) {
    this.selectedOrder = { ...order };
    this.mode = 'view';
    this.activeMenu = null;
  }

  editOrder(order: any) {
    this.selectedOrder = { ...order };
    this.mode = 'edit';
    this.activeMenu = null;
  }

  deleteOrder(id: string) {
    this.orderToDeleteId = id;
    this.confirmCancelModal = true;
    this.activeMenu = null;
  }

  confirmDelete() {
    if (this.orderToDeleteId) {
      this.orders = this.orders.filter(o => o.id !== this.orderToDeleteId);
      this.applyFilter();
    }

    this.confirmCancelModal = false;
    this.successModal = true;
  }

  cancelDelete() {
    this.confirmCancelModal = false;
    this.orderToDeleteId = null;
  }

  closeSuccessModal() {
    this.successModal = false;
  }

  saveEdit() {
    const index = this.orders.findIndex(o => o.id === this.selectedOrder.id);
    if (index !== -1) {
      this.orders[index] = this.selectedOrder;
    }
    this.applyFilter();
    this.closeModal();
  }

  getStatusWidth(status: string) {
    if (status === 'Entregue') return '100%';
    if (status === 'Em rota') return '66%';
    if (status === 'Preparando') return '33%';
    return '10%';
  }

  getStatusIndex(status: string) {
    if (status === 'Entregue') return 3;
    if (status === 'Em rota') return 2;
    if (status === 'Preparando') return 1;
    return 0;
  }
}