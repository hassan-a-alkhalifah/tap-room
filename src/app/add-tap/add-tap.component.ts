import { Component, Output, EventEmitter } from '@angular/core';
import { Tap } from '../models/tap.model';

@Component({
  selector: 'app-add-tap',
  templateUrl: './add-tap.component.html',
  styleUrls: ['./add-tap.component.css']
})
export class AddTapComponent {
  @Output() clickedAdd = new EventEmitter();

  submitForm(name: string, brand: string, price: string, abv: string) {
    let newTap: Tap = new Tap(name, brand, parseInt(price), parseInt(abv));
    this.clickedAdd.emit(newTap);
  }
}
