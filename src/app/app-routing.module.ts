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
    path: 'slovnik/:nazevStylu',
    loadChildren: () => import('./pages/slovnik/slovnik.module').then( m => m.SlovnikPageModule)
  },

  {
    path: 'pomucky',
    loadChildren: () => import('./pages/pomucky/pomucky.module').then( m => m.PomuckyPageModule)
  },
  {
    path: 'vyukovy-mod',
    loadChildren: () => import('./pages/vyukovy-mod/vyukovy-mod.module').then( m => m.VyukovyModPageModule)
  },
  {
    path: 'navody',
    loadChildren: () => import('./pages/navody/navody.module').then( m => m.NavodyPageModule)
  },
  {
    path: 'prihlaseni',
    loadChildren: () => import('./pages/prihlaseni/prihlaseni.module').then( m => m.PrihlaseniPageModule)
  },
  {
    path: 'vnitrek',
    loadChildren: () => import('./pages/navody/vnitrek/vnitrek.module').then( m => m.VnitrekPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
