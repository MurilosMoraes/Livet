import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  screen1 = true;
  screen2 = false;

  constructor() { }

  ngOnInit() {
  }

  nextScreen() {
    this.screen1 = false;
    this.screen2 = true;
  }


}
