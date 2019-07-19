import { Component, OnInit } from '@angular/core';
import {NAVBAR_CONFIG} from './NavbarConfig';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private ACTIONS = NAVBAR_CONFIG.ACTIONS;
  private BUTTONS = NAVBAR_CONFIG.BUTTONS

  constructor() { }

  ngOnInit() {
  }

}
