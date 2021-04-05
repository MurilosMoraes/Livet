import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.page.html',
  styleUrls: ['./deposito.page.scss'],
})
export class DepositoPage implements OnInit {

  dados = true
  confirmar = false
  comprovante = false

  constructor() { }

  ngOnInit() {
  }

  showDados(){
    this.dados = true
    this.confirmar = false
    this.comprovante = false
  }

  showConfirmar(){
    this.dados = false
    this.confirmar = true
    this.comprovante = false
  }

  showComprovante(){
    this.dados = false
    this.confirmar = false
    this.comprovante = true
  }
}
