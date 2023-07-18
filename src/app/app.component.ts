import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSubmenuCard: boolean = false;
  showSubmenuPay: boolean = false;
  showSubmenuTransfer: boolean = false;

  constructor(public route: Router) {
  }

  menuItemHandlerCard(): void {
    var cardMenu = document.getElementById('cardMenu');
    if(this.showSubmenuCard) {
      cardMenu!.style.opacity = '0';
    }
    else {
      cardMenu!.style.opacity = '1';
    }

    this.showSubmenuCard = !this.showSubmenuCard;
  }

  menuItemHandlerPay(): void {
    var payMenu = document.getElementById('payMenu');
    if(this.showSubmenuPay) {
      payMenu!.style.opacity = '0';
    }
    else {
      payMenu!.style.opacity= '1';
    }

    this.showSubmenuPay = !this.showSubmenuPay;
  }

  menuItemHandlerTransfer(): void {
    var transactionMenu = document.getElementById('transactionMenu');
    if(this.showSubmenuTransfer) {
      transactionMenu!.style.opacity = '0';
    }
    else {
      transactionMenu!.style.opacity = '1';
    }

    this.showSubmenuTransfer = !this.showSubmenuTransfer;
  }

  goToHome() {
    this.route.navigate(['home']);
  }

  goToAboutUs() {
    this.route.navigate(['about-us']);
  }

  goToPrivacyPolicy() {
    this.route.navigate(['privacy-policy']);
  }

  goToEula() {
    this.route.navigate(['eula']);
  }
}
