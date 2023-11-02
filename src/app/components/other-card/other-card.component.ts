import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'other-card',
  templateUrl: './other-card.component.html',
  styleUrls: ['./other-card.component.css']
})
export class OtherCardComponent implements OnInit {

  @Input() otherCardDate: string = "";
  @Input() otherCardImg: string = "";
  @Input() otherCardTitle: string = "";
  @Input() otherCardDescription: string = "";
 
  constructor() { }

  ngOnInit(): void {
  }

}
