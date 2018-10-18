import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Tap } from '../models/tap.model';

@Component({
  selector: 'app-sell-tap',
  templateUrl: './sell-tap.component.html',
  styleUrls: ['./sell-tap.component.css']
})
export class SellTapComponent {
  @Input() childSelectedTap: Tap;
  @Output() clickedSell = new EventEmitter;

  sellButtonClicked() {
    this.clickedSell.emit(this.childSelectedTap);
  }
}
