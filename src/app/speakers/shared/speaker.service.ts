import { Injectable } from '@angular/core';
import { Speaker } from '../speaker.model';
import { Md5 } from 'ts-md5/dist/md5';
import * as _ from 'lodash';

@Injectable()
export class SpeakerService {

  speakers: Speaker[];

  constructor() { 
    this.speakers = <Speaker[]> njSpeakers;
    this.speakers.forEach(speaker => {
      speaker.avatar = speaker.gravatar && this.getGravatarUrl(speaker.gravatar) 
        || this.getLocalAvatarUrl(speaker.id, speaker.photo)
    });
    this.speakers.sort((speakerA, speakerB)=> {
      return speakerA.name.localeCompare(speakerB.name);
    });
    
  }

  private getGravatarUrl(email: string) {
    return `https://www.gravatar.com/avatar/${Md5.hashStr(email)}?s=100`;
  }

  private getLocalAvatarUrl(idSpeaker, fileExtension) {
    const file = fileExtension ? `${idSpeaker}.${fileExtension}` : 'gravatar-duke.jpg'
    return `assets/images/speakers/${file}`;
  }

  getSpeakers(): Speaker[] {
    return this.speakers;
  }

  getSpeaker(idSpeaker: string) {
    const speaker = _.find(this.speakers, speaker => {
      return speaker.id === idSpeaker;
    })
    return _.cloneDeep(speaker);
  }

  getSpeakersFromIds(ids: string[]) {
    return this.speakers.filter(speaker => {
      return ids.indexOf(speaker.id) >= 0;
    })
  }

}
