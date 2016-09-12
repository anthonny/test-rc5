import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit, OnDestroy {

  speakers: any[];
  selectedSpeaker: any;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.speakers = njSpeakers;
    this.sub = this.route
      .params
      .subscribe(params => {
        if (!params['id']) {
          this.router.navigate(['/speakers', this.speakers[0].id]);
          return;
        }

        const _selectedSpeakers = this.speakers.filter(speaker => {
          return speaker.id === params['id'];
        });

        this.selectedSpeaker = _selectedSpeakers.length && _selectedSpeakers[0]
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
