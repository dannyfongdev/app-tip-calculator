import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tip-calculator';
  billAmount = 50.0;
  countPeople = 1;
  tipPercent = 15; // store as integer not a fraction
  customTipPercent = 40;

  // used to toggle custom tip input field
  showCustomInput = false;
  setShowCustomInput(value: boolean) {
    this.showCustomInput = value;
    // if you show the input, then set tipPercent to custom
    if (value) {
      this.tipPercent = this.customTipPercent;
    }
  }

  calcTipAmount() {
    const tip = (this.billAmount * this.tipPercent) / 100 / this.countPeople;
    return this.formatCurrency(tip);
  }

  calcTotalAmount() {
    const tip = (this.billAmount * this.tipPercent) / 100 / this.countPeople;
    const bill = this.billAmount / this.countPeople;
    return this.formatCurrency(bill + tip);
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

  onChangeTip(value: number) {
    this.tipPercent = value;
    // if standard tip percent is selected, then hide custom tip input field
    this.showCustomInput = false;
  }

  onChangeCustomTip(e: Event) {
    const parsedValue = parseInt((e.target as HTMLInputElement).value);

    if (!isNaN(parsedValue)) {
      this.tipPercent = parsedValue;
    }
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
}
