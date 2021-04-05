import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-saldo',
  templateUrl: './adicionar-saldo.page.html',
  styleUrls: ['./adicionar-saldo.page.scss'],
})
export class AdicionarSaldoPage implements OnInit {

  select = true;
  ted = false
  boleto = false
  confirmar = false
  gerado = false

  constructor() { }

  ngOnInit() {
  }

  showSelect() {
    this.select = true
    this.ted = false
    this.boleto = false
    this.confirmar = false
    this.gerado = false
  }

  showTed() {
    this.select = false
    this.ted = true
    this.boleto = false
    this.confirmar = false
    this.gerado = false
  }

  showBoleto() {
    this.select = false
    this.ted = false
    this.boleto = true
    this.confirmar = false
    this.gerado = false
  }
  
  showConfirmar() {
    this.select = false
    this.ted = false
    this.boleto = false
    this.confirmar = true
    this.gerado = false
  }

  showGerado() {
    this.select = false
    this.ted = false
    this.boleto = false
    this.confirmar = false
    this.gerado = true
  }

}
