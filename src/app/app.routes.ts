import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { CardapioComponent } from './pages/public/cardapio/cardapio.component';
import { PaymentComponent } from './pages/client/payment/payment.component';
import { MyOrdersComponent } from './pages/client/my-orders/my-orders.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: ClientLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'cardapio', component: CardapioComponent },
            { path: 'payment/:productId', component: PaymentComponent },
            { path: 'orders', component: MyOrdersComponent },
            {path: 'profile', loadComponent: () => import('./pages/client/profile/profile.component').then(m => m.ProfileComponent) },
            {path: 'loyalty', loadComponent: () => import('./pages/client/loyalty/loyalty.component').then(m => m.LoyaltyComponent) },
            // { path: 'login', component: LoginComponent }
        ]
    },

    // {
    //     path: 'admin',
    //     component: AdminLayoutComponent,
    //     children: [
    //         { path: '', component: AdminDashboardComponent },
    //         { path: 'produtos', component: ProdutosComponent }
    //     ]
    // }
];
