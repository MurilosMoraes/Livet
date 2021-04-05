import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.page.html',
  styleUrls: ['./saque.page.scss'],
})
export class SaquePage implements OnInit {

  saque = true
  aguardando = false
  confirmar = false
  confirmado = false

  constructor() { }

  ngOnInit() {
  }

  showSaque(){
    this.saque = true
    this.aguardando = false
    this.confirmar = false
    this.confirmado = false
  }

  showAguardando(){
    this.saque = false
    this.aguardando = true
    this.confirmar = false
    this.confirmado = false
  }

  showConfirmar(){
    this.saque = false
    this.aguardando = false
    this.confirmar = true
    this.confirmado = false
  }

  showConfirmado(){
    this.saque = false
    this.aguardando = false
    this.confirmar = false
    this.confirmado = true
  }

}
