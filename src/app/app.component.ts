import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  billAmount = 0;
  countPeople = 1;
  tipPercent = 15; // store as integer not a fraction
  customTipPercent = 40;

  calcTipAmount() {
    const tip = (this.billAmount * this.tipPercent) / 100 / this.countPeople;
    return (tip);
  }

  calcTotalAmount() {
    const tip = (this.billAmount * this.tipPercent) / 100 / this.countPeople;
    const bill = this.billAmount / this.countPeople;
    return (bill + tip);
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
    this.billAmount = 0;
    this.countPeople = 1;
    this.tipPercent = 15; // store as integer not a fraction
    this.customTipPercent = 40;
  }

}
