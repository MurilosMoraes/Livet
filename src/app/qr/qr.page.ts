import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  qrs = true;
  exemplo = true;
  scan = false;
  confirm = false;
  comprovante = false;
  constructor() { }

  ngOnInit() {
  }

  showExemplo(){
    this.qrs = true
    this.exemplo = true;
    this.scan = false;
    this.confirm = false
    this.comprovante = false
  }

  showScan(){
    this.qrs = true
    this.exemplo = false;
    this.scan = true;
    this.confirm = false
    this.comprovante = false
  }

  showConfirm(){
    this.qrs = false
    this.confirm = true
    this.comprovante = false
  }

  
  showComprovante(){
    this.qrs = false
    this.confirm = false
    this.comprovante = true
  }


}
