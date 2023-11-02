import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})

export class BigCardComponent implements OnInit {

  @Input() bigCardDate: string = "";
  @Input() bigCardImg: string = "";
  @Input() bigCardTitle: string = "";
  @Input() bigCardDescription: string = "";
  @Input() id: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
