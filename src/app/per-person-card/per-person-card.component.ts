import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-per-person-card',
  templateUrl: './per-person-card.component.html',
  styleUrls: ['./per-person-card.component.css'],
})
export class PerPersonCardComponent {
  @Input() tipAmount = 0;
  @Input() totalAmount = 0;

  @Output() resetEvent = new EventEmitter();

  sendReset() {
    this.resetEvent.emit();
  }
}
