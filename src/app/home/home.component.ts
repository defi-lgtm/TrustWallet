import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent {
  dropdownOpen = false; // Variable to control the products dropdown state
  resourcesDropdownOpen = false; // Variable to control the resources dropdown state
  mobileMenuOpen = false; // Variable to control the mobile menu state

  constructor(private router: Router) {}

  navigateToWallet() {
    this.router.navigate(['/wallet']);
  }

  navigateToBrand() {
    this.router.navigate(['/brand']);
  }

  navigateToFAQ() {
    this.router.navigate(['/faq']);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; // Toggle the products dropdown state
  }

  toggleResourcesDropdown() {
    this.resourcesDropdownOpen = !this.resourcesDropdownOpen; // Toggle the resources dropdown state
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen; // Toggle the mobile menu state
  }
}
