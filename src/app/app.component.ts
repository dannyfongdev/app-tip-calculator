import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  billAmount: undefined | number;
  countPeople: undefined | number;
  tipPercent = 15; // store as integer not a fraction
  customTipPercent = 40;

  calcTipAmount() {
    if (this.billAmount && this.countPeople) {
      const tip = (this.billAmount * this.tipPercent) / 100 / this.countPeople;
      return tip;
    } else {
      return 0;
    }
  }

  calcTotalAmount() {
    if (this.billAmount && this.tipPercent && this.countPeople) {
      const tip = (this.billAmount * this.tipPercent) / 100 / this.countPeople;
      const bill = this.billAmount / this.countPeople;
      return bill + tip;
    } else {
      return 0;
    }
  }

  onChangeBill(e: Event) {
    const parsedValue = parseFloat((e.target as HTMLInputElement).value);

    if (!isNaN(parsedValue)) {
      this.billAmount = parsedValue;
    }
  }

  onChangePeople(e: Event) {
    const parsedValue = parseInt((e.target as HTMLInputElement).value);

    if (!isNaN(parsedValue)) {
      this.countPeople = parsedValue;
    }
  }

  onReset() {
    this.billAmount = undefined;
    this.countPeople = undefined;
    this.tipPercent = 15; // store as integer not a fraction
    this.customTipPercent = 40;
  }
}
