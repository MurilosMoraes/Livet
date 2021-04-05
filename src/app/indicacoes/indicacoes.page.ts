import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicacoes',
  templateUrl: './indicacoes.page.html',
  styleUrls: ['./indicacoes.page.scss'],
})
export class IndicacoesPage implements OnInit {

scan = true
down = false


  constructor() { }

  ngOnInit() {
  }

  showScan(){
    this.scan = true
    this.down = false
  }

  showDown(){
    this.scan = false
    this.down = true
  }

}
