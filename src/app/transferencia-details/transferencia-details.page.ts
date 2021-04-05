import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia-details',
  templateUrl: './transferencia-details.page.html',
  styleUrls: ['./transferencia-details.page.scss'],
})
export class TransferenciaDetailsPage implements OnInit {

  screen1 = true;
  screen2 = false;
  screen3 = false;
  screen4 = false;
  

  constructor() { }

  ngOnInit() {
  }

  showScreen2(){
    this.screen1 = false;
    this.screen2 = true;
    this.screen3 = false;
    this.screen4 = false; 
  }

  showScreen3(){
    this.screen1 = false;
    this.screen2 = false;
    this.screen3 = true;
    this.screen4 = false; 
  }

  showScreen4(){
    this.screen1 = false;
    this.screen2 = false;
    this.screen3 = false;
    this.screen4 = true; 
  }

}
