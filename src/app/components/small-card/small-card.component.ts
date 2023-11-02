import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})

export class SmallCardComponent implements OnInit {

  @Input() smallCardDate: string = "";
  @Input() smallCardImg: string = "";
  @Input() smallCardTitle: string = "";
  @Input() id: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
