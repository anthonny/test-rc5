import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SpeakerService } from './shared/speaker.service';
import { Speaker } from './speaker.model';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit, OnDestroy {

  speakers: Speaker[];
  selectedSpeaker: any;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private speakerService: SpeakerService) { 
    
  }

  ngOnInit() {
    this.speakers = this.speakerService.getSpeakers();
    this.sub = this.route
      .params
      .subscribe(params => {
        if (!params['id']) {
          this.router.navigate(['/speakers', this.speakers[0].id]);
          return;
        }

        this.selectedSpeaker = this.speakerService.getSpeaker(params['id']);
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
