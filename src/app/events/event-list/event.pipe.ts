import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../shared/event.model';

@Pipe({
  name: 'event'
})
export class EventPipe implements PipeTransform {

  transform(values: Event[], args?: string): any {
    if (!args)
      return values;

    return values.filter(event => event.title.toLowerCase().indexOf(args.toLowerCase()) >= 0);
  }

}
