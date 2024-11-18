import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true, // Marking this component as standalone
  imports: [CommonModule] // Including CommonModule here
})
export class FaqComponent {
  dropdownOpen = false; // Variable to control the products dropdown state
  resourcesDropdownOpen = false; // Variable to control the resources dropdown state
  private openIndex: number | null = null; // To keep track of which question is open

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index; // Toggle the selected index
  }

  isOpen(index: number): boolean {
    return this.openIndex === index; // Check if the current index is open
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen; // Toggle the dropdown
  }

  navigateToWallet() {
    // Implement navigation to wallet
  }

  toggleResourcesDropdown() {
    this.resourcesDropdownOpen = !this.resourcesDropdownOpen; // Toggle resources dropdown
  }

  navigateToBrand() {
    // Implement navigation to brand
  }

  navigateToFAQ() {
    // Implement navigation to FAQ
  }
}
