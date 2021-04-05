import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerar-qr',
  templateUrl: './gerar-qr.page.html',
  styleUrls: ['./gerar-qr.page.scss'],
})
export class GerarQrPage implements OnInit {

  gerar = true
  inputs = false
  qr = false
  comprovante = false

  constructor() { }

  ngOnInit() {
  }


  showGerar(){
    this.gerar = true
    this.inputs = false
    this.qr = false
    this.comprovante = false
  }

  showInputs(){
    this.gerar = false
    this.inputs = true
    this.qr = false
    this.comprovante = false
  }

  showQr(){
    this.gerar = false
    this.inputs = false
    this.qr = true
    this.comprovante = false
  }

  showComprovante(){
    this.gerar = false
    this.inputs = false
    this.qr = false
    this.comprovante = true
  }
}
