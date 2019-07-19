import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css']
})
export class ButtonDetailComponent implements OnInit {

  @Input() button = {
    class: [],
    label: null,
    type: null,
    icon: [],
  };
  @Input() action?;
  @Input() actionValue?;

  private link;

  constructor() { }

  ngOnInit() {
    if (this.action) {
      this.link = this.action.link;
      if (this.actionValue) {
        this.link += '/' + this.actionValue;
      }
    }
  }

}
