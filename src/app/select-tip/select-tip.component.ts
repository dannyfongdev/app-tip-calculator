import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-tip',
  templateUrl: './select-tip.component.html',
  styleUrls: ['./select-tip.component.css'],
})
export class SelectTipComponent {
  @Input() tipPercent = 15; // store as integer not a fraction
  @Output() tipPercentChange = new EventEmitter<number>();

  @Input() customTipPercent = 40;

  

  // used to toggle custom tip input field
  showCustomInput = false;
  setShowCustomInput(value: boolean) {
    this.showCustomInput = value;
    // if you show the input, then set tipPercent to custom
    if (value) {
      this.tipPercentChange.emit(this.customTipPercent);
    }
  }

  onChangeTip(value: number) {
    // if standard tip percent is selected, then hide custom tip input field
    this.showCustomInput = false;
    this.tipPercentChange.emit(value);
  }

  onChangeCustomTip(e: Event) {
    const parsedValue = parseInt((e.target as HTMLInputElement).value);

    if (!isNaN(parsedValue)) {
      this.tipPercentChange.emit(parsedValue);
    }
  }
}
