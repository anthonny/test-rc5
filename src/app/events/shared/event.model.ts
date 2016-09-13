import { Subject } from './subject.model';
import { Doc } from './doc.model';
import { Place } from '../../shared/place.model';

export class Event {
    id: string;
    title: string;
    date: Date;
    time: string;
    register: string;
    place: string;
    subjects: Subject[];
    docs: Doc[];
    fullPlace: Place;
    agenda: string;
}
