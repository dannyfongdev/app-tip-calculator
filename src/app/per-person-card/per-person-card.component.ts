import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-per-person-card',
  templateUrl: './per-person-card.component.html',
  styleUrls: ['./per-person-card.component.css']
})
export class PerPersonCardComponent {
  @Input() tipAmount = "";
  @Input() totalAmount = "";
}
