import {
  Component,
  ElementRef,
  AfterViewInit,
  HostListener,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { LucideAngularModule, ShoppingCart, Bell } from 'lucide-angular';
import { filter } from 'rxjs/operators';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('dropdownAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px) scale(0.95)' }),
        animate('180ms ease-out',
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        )
      ]),
      transition(':leave', [
        animate('150ms ease-in',
          style({ opacity: 0, transform: 'translateY(10px) scale(0.95)' })
        )
      ])
    ])
  ]
})
export class HeaderComponent implements AfterViewInit {
  isLoggedIn = false;
  isProfileOpen = false;
  scrolled = false;

  readonly ShoppingCart = ShoppingCart;
  readonly Bell = Bell;

  constructor(private el: ElementRef, private router: Router) { }

  ngOnInit() {
    this.checkAuth();
  }

  checkAuth() {
    this.isLoggedIn = localStorage.getItem('user_logged_in') === 'true';
  }

  toggleProfile() {
    const wasOpen = this.isProfileOpen;

    this.closeAllModals();
    this.isProfileOpen = !wasOpen;
  }

  logout() {
    localStorage.removeItem('user_logged_in');
    this.isLoggedIn = false;
    this.isProfileOpen = false;
  }

  ngAfterViewInit() {
    this.updateUnderline();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.updateUnderline(), 50);
      });
  }

  @HostListener('window:resize')
  onResize() {
    this.updateUnderline();
  }

  updateUnderline() {
    const active = this.el.nativeElement.querySelector('.menu a.active');
    const underline = this.el.nativeElement.querySelector('.underline');

    if (active && underline) {
      underline.style.width = active.offsetWidth + 'px';
      underline.style.transform = `translateX(${active.offsetLeft}px)`;
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  isNotificationsOpen = false;
  isCartOpen = false;

  notifications = [
    {
      id: 1,
      title: 'Pedido confirmado',
      message: 'Seu pedido foi aceito',
      time: 'Agora',
      read: false,
      type: 'order'
    }
  ];

  pendingOrder: any = null;

  @ViewChild('notificationsRef') notificationsRef!: ElementRef;
  @ViewChild('cartRef') cartRef!: ElementRef;

  get unreadNotifications() {
    return this.notifications.filter(n => !n.read).length;
  }

  toggleNotifications() {
    const wasOpen = this.isNotificationsOpen;

    this.closeAllModals();
    this.isNotificationsOpen = !wasOpen;
  }

  toggleCart() {
    const wasOpen = this.isCartOpen;

    this.closeAllModals();
    this.isCartOpen = !wasOpen;
  }

  markNotificationRead(id: number) {
    this.notifications = this.notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    );
  }

  clearCart() {
    this.pendingOrder = null;
  }

  continueOrder() {
    if (!this.pendingOrder) return;

    this.isCartOpen = false;
    this.router.navigate(['/pagamento', this.pendingOrder.productId]);
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;

    const clickedInsideNotifications =
      this.notificationsRef?.nativeElement.contains(target);

    const clickedInsideCart =
      this.cartRef?.nativeElement.contains(target);

    const clickedInsideHeader =
      this.el.nativeElement.contains(target);

    if (!clickedInsideNotifications && !clickedInsideCart && !clickedInsideHeader) {
      this.closeAllModals();
    }
  }

  closeAllModals() {
    this.isNotificationsOpen = false;
    this.isCartOpen = false;
    this.isProfileOpen = false;
  }
}