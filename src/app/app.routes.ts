import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardapioComponent } from './home/cardapio/cardapio.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: ClientLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'cardapio', component: CardapioComponent },
            // { path: 'pagamento/:productId', component: PaymentComponent },
            // { path: 'meus-pedidos', component: OrdersComponent }
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
