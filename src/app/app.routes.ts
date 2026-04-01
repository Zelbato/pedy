import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardapioComponent } from './home/cardapio/cardapio.component';
import { PaymentComponent } from './home/payment/payment.component';
import { MyOrdersComponent } from './home/my-orders/my-orders.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

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
