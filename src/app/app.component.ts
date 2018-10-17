import { Component } from '@angular/core';
import { Tap } from './models/tap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string =  'Tap Room';
  masterTapList: Tap[] = [
    new Tap('Bock', 'Shiner', 6, 4.4, 124),
    new Tap('Cappuccino Stout', 'Lagunitas', 6, 9.2, 124),
    new Tap('Revival', 'Reverend Nat\'s', 5, 6, 124)
  ]

}
