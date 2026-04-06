import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppIconComponent } from '../../../shared/icon/icon.component';
import { NgxMaskPipe } from 'ngx-mask';
import { NgxMaskDirective } from 'ngx-mask';

type PaymentMethod = 'card' | 'pix' | 'delivery';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AppIconComponent, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  public router = inject(Router);

  productId = signal<string | null>(null);
  method = signal<PaymentMethod>('card');
  isProcessing = signal(false);
  isSuccess = signal(false);
  customOrder = signal<any>(null);
  orderTotal = signal<number>(0);
  // changeFor: string = '';
  // valorLimpo: number = 0;
  valor: string = '';

  constructor() {
    this.productId.set(this.route.snapshot.params['id']);

    const navigation = this.router.getCurrentNavigation();
    const stateData = navigation?.extras.state?.['data'];

    if (stateData) {
      this.customOrder.set(stateData);
      this.orderTotal.set(stateData.total);
    } else {
      // const product = PRODUCTS.find(p => p.id === this.productId());
      // this.orderTotal.set(product?.price || 0);
    }
  }


  cardName = '';
  cardNumber = '';
  cardExpiry = '';
  cardCvv = '';
  deliveryMethod = signal<'cash' | 'card'>('card');
  needsChange = signal(false);
  // changeFor = '';

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('productId');
    this.productId.set(id);

    if (id === 'custom') {
      const saved = localStorage.getItem('customCupOrder');
      if (saved) this.customOrder.set(JSON.parse(saved));
    }
  }

  handlePayment() {
    if (this.method() === 'card' && (!this.cardName || !this.cardNumber)) {
      alert('Preencha os dados do cartão');
      return;
    }

    this.isProcessing.set(true);
    setTimeout(() => {
      this.isProcessing.set(false);
      this.isSuccess.set(true);
      if (this.productId() === 'custom') localStorage.removeItem('customCupOrder');
    }, 2000);
  }

  converterParaNumero(valor: string): number {
    if (!valor) return 0;

    valor = valor.replace('R$ ', '')
      .replace(/\./g, '')
      .replace(',', '.');

    return parseFloat(valor);
  }

  salvar() {
    let valorNumerico = this.converterParaNumero(this.valor);
    console.log(valorNumerico);
  }

  public goToMyOrders() {
    this.router.navigate(['/orders']);
  }

  public goBack() {
    this.router.navigate(['/cardapio']);
  }
}
