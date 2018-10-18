import { Component } from '@angular/core';
import { Tap } from './models/tap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string =  'Tap Room';
  selectedTap = null;

  masterTapList: Tap[] = [
    new Tap('Bock', 'Shiner', 6, 4.4),
    new Tap('Cappuccino Stout', 'Lagunitas', 6, 9.2),
    new Tap('Revival', 'Reverend Nat\'s', 5, 6)
  ];

  editTap(clickedTap) {
    this.selectedTap = clickedTap;
  }

  finishedEditing() {
    this.selectedTap = null;
  }

  subtractOne(tapToSubtract) {
    tapToSubtract.fullness --;
  }

  addTap(newTap: Tap) {
    this.masterTapList.push(newTap);
  }

}
