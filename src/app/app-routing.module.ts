import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lobby',
    pathMatch: 'full'
  },
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'transferencia-details',
    loadChildren: () => import('./transferencia-details/transferencia-details.module').then( m => m.TransferenciaDetailsPageModule)
  },
  {
    path: 'comprovante',
    loadChildren: () => import('./comprovante/comprovante.module').then( m => m.ComprovantePageModule)
  },
  {
    path: 'explorar',
    loadChildren: () => import('./explorar/explorar.module').then( m => m.ExplorarPageModule)
  },
  {
    path: 'meus-dados',
    loadChildren: () => import('./meus-dados/meus-dados.module').then( m => m.MeusDadosPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'indicacoes',
    loadChildren: () => import('./indicacoes/indicacoes.module').then( m => m.IndicacoesPageModule)
  },
  {
    path: 'perfil-loja',
    loadChildren: () => import('./perfil-loja/perfil-loja.module').then( m => m.PerfilLojaPageModule)
  },
  {
    path: 'gerar-qr',
    loadChildren: () => import('./gerar-qr/gerar-qr.module').then( m => m.GerarQrPageModule)
  },
  {
    path: 'adicionar-saldo',
    loadChildren: () => import('./adicionar-saldo/adicionar-saldo.module').then( m => m.AdicionarSaldoPageModule)
  },
  {
    path: 'deposito',
    loadChildren: () => import('./deposito/deposito.module').then( m => m.DepositoPageModule)
  },
  {
    path: 'saque',
    loadChildren: () => import('./saque/saque.module').then( m => m.SaquePageModule)
  },
  {
    path: 'ver-saques',
    loadChildren: () => import('./ver-saques/ver-saques.module').then( m => m.VerSaquesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
