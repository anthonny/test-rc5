import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {

  @Input() speakers;
  constructor() { }

  ngOnInit() {
  }

}
