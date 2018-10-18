import {Pipe, PipeTransform} from '@angular/core';
import {Tap} from './models/tap.model';

@Pipe({
  name: "tapLevel",
  pure: false
})

export class FullnessPipe implements PipeTransform {

  transform(input: Tap[], chosenTapLevel) {
    const output: Tap[] = [];
    if(chosenTapLevel === "justTapped") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].fullness > 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(chosenTapLevel === 'lowTaps') {
      for(var i = 0; i < input.length; i++) {
        if(input[i].fullness <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
