import { Doc } from './doc.model';
import { Speaker } from '../../speakers/speaker.model';

export class Subject {
    title: string;
    length: string;
    time: string;
    type: string;
    speakers: string[];
    fullSpeakers: Speaker[];
    abstract: string;
    docs: Doc
}
