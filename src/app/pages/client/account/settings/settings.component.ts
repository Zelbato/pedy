import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule, Star, Sparkles, Award, Info,
  History, Gift, ChevronRight, ArrowLeft, Zap, Trophy, Heart, ChessKing, Bell,
  Globe, CreditCard, LogOut, Trash2, HelpCircle, FileText, X, ShoppingCart
} from 'lucide-angular';
import { MetodPaymentModalComponent } from './metod-payment-modal/metod-payment-modal.component';
import { HistoryModalComponent } from './history-modal/history-modal.component';
import { HelpCenterModalComponent } from './help-center-modal/help-center-modal.component';
import { TermsContentModalComponent } from './terms-content-modal/terms-content-modal.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, MetodPaymentModalComponent, HistoryModalComponent, HelpCenterModalComponent, TermsContentModalComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  readonly Star = Star;
  readonly Sparkles = Sparkles;
  readonly Award = Award;
  readonly Info = Info;
  readonly History = History;
  readonly Gift = Gift;
  readonly ChevronRight = ChevronRight;
  readonly ArrowLeft = ArrowLeft;
  readonly Zap = Zap;
  readonly Trophy = Trophy;
  readonly Heart = Heart;
  readonly ChessKing = ChessKing;
  readonly Bell = Bell;
  readonly Globe = Globe;
  readonly CreditCard = CreditCard;
  readonly LogOut = LogOut;
  readonly Trash2 = Trash2;
  readonly HelpCircle = HelpCircle;
  readonly FileText = FileText;
  readonly close = X;
  readonly ShoppingCart = ShoppingCart;

  activeModal: string | null = null;
  language = 'pt';
  is2FAEnabled = false;
  isPushActive = true;

  passwordStep: 'initial' | 'current' | 'new' = 'initial';

  languages = [
    { id: 'pt', label: 'Português (Brasil)' },
    { id: 'en', label: 'English (US)' },
    { id: 'es', label: 'Español' }
  ];

  transactions = [1, 2, 3];

  helpQuestions = [
    'Como rastrear meu pedido?',
    'Problemas com o pagamento',
    'Como cancelar minha assinatura?',
    'Falar com um atendente'
  ];

  t(key: string): string {
    const translations: any = {
      'settings': 'Configurações',
      'settings_subtitle': 'Gerencie sua conta e preferências',
      'preferences': 'Preferências',
      'push_notifications': 'Notificações Push',
      'push_description': 'Receba alertas sobre seus pedidos',
      'app_language': 'Idioma do App',
      'language_description': 'Escolha sua linguagem preferida',
      'payments': 'Pagamentos',
      'saved_methods': 'Métodos Salvos',
      'payments_description': 'Gerencie seus cartões de crédito',
      'transaction_history': 'Histórico',
      'transactions_description': 'Veja suas últimas transações',
      'support_help': 'Suporte e Ajuda',
      'help_center': 'Central de Ajuda',
      'help_description': 'Dúvidas frequentes e chat',
      'terms_of_use': 'Termos de Uso',
      'terms_description': 'Políticas e privacidade',
      'delete_account': 'Excluir Conta',
      'settings_add_card': 'Adicionar Novo Cartão',
      'help': 'AJUDA E SUPORTE',
      'transactions': 'Histórico',
      'terms': 'Termos de Uso',
    };
    return translations[key] || key;
  }

  setActiveModal(modal: string | null) {
    this.activeModal = modal;
    if (!modal) this.passwordStep = 'initial';
  }

  setLanguage(langId: string) {
    this.language = langId;
    this.setActiveModal(null);
  }

  togglePush() {
    this.isPushActive = !this.isPushActive;
  }
}
