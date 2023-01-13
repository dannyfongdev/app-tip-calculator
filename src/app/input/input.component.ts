import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label = "";
  @Input() iconUrl = "";

  @Input() inputValue = 0;
  @Output() inputValueChange = new EventEmitter<number>();

  @Input() zeroIsInvalid = false; // set to true if you want error message for value=0
  @Input() isCurrency = false; // set to get 0.00 format

  onChangeValue (e: Event) {
    const parsedValue = parseFloat((e.target as HTMLInputElement).value);

    if (!isNaN(parsedValue)) {
      this.inputValueChange.emit(parsedValue);
    }
  }
}
