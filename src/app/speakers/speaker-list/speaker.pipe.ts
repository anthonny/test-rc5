import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from '../speaker.model';

@Pipe({
  name: 'speaker'
})
export class SpeakerPipe implements PipeTransform {

  transform(value: Speaker[], args?: string): any {
    if (!args) 
      return value;
    
    return value.filter(speaker => speaker.name.indexOf(args) >= 0);
  }

}
