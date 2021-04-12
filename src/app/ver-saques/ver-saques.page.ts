import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-saques',
  templateUrl: './ver-saques.page.html',
  styleUrls: ['./ver-saques.page.scss'],
})
export class VerSaquesPage implements OnInit {

  escolher = true
  pendentes = false
  aprovados = false
  cancelados = false

  constructor() { }

  ngOnInit() {
  }

  showEscolher(){
    this.escolher = true;
    this.pendentes = false;
    this.aprovados = false;
    this.cancelados = false;
  }

  showPendentes(){
    this.escolher = false;
    this.pendentes = true;
    this.aprovados = false;
    this.cancelados = false;
  }

  showAprovados(){
    this.escolher = false;
    this.pendentes = false;
    this.aprovados = true;
    this.cancelados = false;
  }

  showCancelados(){
    this.escolher = false;
    this.pendentes = false;
    this.aprovados = false;
    this.cancelados = true;
  }

}
