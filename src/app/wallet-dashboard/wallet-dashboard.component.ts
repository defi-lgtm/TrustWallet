import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wallet-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wallet-dashboard.component.html',
  styleUrls: ['./wallet-dashboard.component.css']
})
export class WalletDashboardComponent {
  tabs = [
    { label: 'Coin', active: true },
    { label: 'DeFi', active: false },
    { label: 'NFT', active: false },
  ];

  actions = [
    { icon: 'send', label: 'Send' },
    { icon: 'arrow_downward', label: 'Receive' },
    { icon: 'shopping_cart', label: 'Buy' },
    { icon: 'more_horiz', label: 'More' },
  ];

  balance = {
    total: 2141600.00,
    btc: 30.343
  };

  searchTerm: string = '';
  filteredCryptos: any[] = [];

  cryptos = [
    { name: 'JST (BEP20)', price: 4.66, valueUSD: -2141600.00, icon: '/JST.png' },

    { name: 'BNB (BEP20)', price: 597.10, valueUSD: 0, icon: '/bnb.png' },
    { name: 'BTC (Bitcoin)', price: 68162.01, valueUSD: 0, icon: '/Bitcoin.svg.png' },
  ];

  constructor(private router: Router) {
    this.filteredCryptos = this.cryptos;
  }

  searchCryptos() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCryptos = this.cryptos.filter(crypto =>
      crypto.name.toLowerCase().includes(term)
    );
  }

  goToCryptoDetails(crypto: any) {
    console.log('Navigating to details for:', crypto.name);
    this.router.navigate(['/crypto-details'], { state: { crypto } });
  }

  goToWithdraw() {
    this.router.navigate(['/withdraw']); // Adjust route as needed
  }
}
