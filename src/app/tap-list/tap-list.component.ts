import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from '../models/tap.model';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css']
})
export class TapListComponent {
  @Input() childTapList: Tap[];
  @Output() clickSender = new EventEmitter();
  @Output() clickParentSell = new EventEmitter();

  filterByFullness: string = 'allTaps';

  editButtonClicked(tapToEdit: Tap) {
    this.clickSender.emit(tapToEdit);
  }

  parentSellTap(tapToSell) {
    this.clickParentSell.emit(tapToSell)
  }

  onChange(optionFromMenu) {
    console.log(optionFromMenu)
  this.filterByFullness = optionFromMenu;
}

}
