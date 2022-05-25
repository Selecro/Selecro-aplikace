import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: ':nazevStylu',
    loadChildren: () => import('./pages/styly/styly.module').then( m => m.StylyPageModule)
  },
  {
    path: 'pomucky',
    loadChildren: () => import('./pomucky/pomucky.module').then( m => m.PomuckyPageModule)
  },
  {
    path: 'vyukovy-mod',
    loadChildren: () => import('./vyukovy-mod/vyukovy-mod.module').then( m => m.VyukovyModPageModule)
  },
  {
    path: 'navody',
    loadChildren: () => import('./navody/navody.module').then( m => m.NavodyPageModule)
  },
  {
    path: 'prihlaseni',
    loadChildren: () => import('./prihlaseni/prihlaseni.module').then( m => m.PrihlaseniPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
