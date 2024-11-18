import { Routes } from '@angular/router';
import { WalletDashboardComponent } from './wallet-dashboard/wallet-dashboard.component';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { FaqComponent } from './faq/faq.component';
import { WithdrawComponent } from './withdraw/withdraw.component'; // Import WithdrawComponent

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Set HomeComponent as the default route
  { path: 'wallet', component: WalletDashboardComponent },
  { path: 'brand', component: BrandComponent }, // Add route for BrandComponent
  { path: 'faq', component: FaqComponent }, // Add route for FaqComponent
  {
    path: 'crypto-details',
    loadComponent: () =>
      import('./crypto-details/crypto-details.component').then(
        (m) => m.CryptoDetailsComponent
      ),
  },
  { path: 'withdraw', component: WithdrawComponent }, // Add route for WithdrawComponent
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect any unknown paths to Home
];
