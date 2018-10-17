import { Component, Input } from '@angular/core';
import { Tap } from '../models/tap.model';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css']
})
export class TapListComponent {
  @Input() childTapList: Tap[];
}
