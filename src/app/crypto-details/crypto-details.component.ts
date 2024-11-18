import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crypto-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent {
  crypto: any;
  currentDate: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    this.crypto = navigation?.extras?.state?.['crypto'];

    // Format the current date as 'Month-Day-Year'
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
    this.currentDate = now
      .toLocaleDateString('en-US', options)
      .replace(',', '') // Remove the comma for 'October 29, 2024' format
      .replace(/ /g, '-'); // Replace spaces with hyphens to get 'October-29-2024'

    if (!this.crypto) {
      this.router.navigate(['/wallet']);
    }
  }
}
