import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletDashboardComponent } from './wallet-dashboard.component';

describe('WalletDashboardComponent', () => {
  let component: WalletDashboardComponent;
  let fixture: ComponentFixture<WalletDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
