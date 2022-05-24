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
    path: 'home/kratky-sloupek',
    loadChildren: () => import('./pages/styly/styly.module').then( m => m.StylyPageModule)
  },
  {
    path: 'retizkove-oko',
    loadChildren: () => import('./retizkove-oko/retizkove-oko.module').then( m => m.RetizkoveOkoPageModule)
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
    path: 'pevne-oko',
    loadChildren: () => import('./pevne-oko/pevne-oko.module').then( m => m.PevneOkoPageModule)
  },
  {
    path: 'dlouhy-sloupek',
    loadChildren: () => import('./dlouhy-sloupek/dlouhy-sloupek.module').then( m => m.DlouhySloupekPageModule)
  },
  {
    path: 'polodlouhy-sloupek',
    loadChildren: () => import('./polodlouhy-sloupek/polodlouhy-sloupek.module').then( m => m.PolodlouhySloupekPageModule)
  },
  {
    path: 'magicky-krouzek',
    loadChildren: () => import('./magicky-krouzek/magicky-krouzek.module').then( m => m.MagickyKrouzekPageModule)
  },
  {
    path: 'shackovani',
    loadChildren: () => import('./shackovani/shackovani.module').then( m => m.ShackovaniPageModule)
  },
  {
    path: 'rozhackovani',
    loadChildren: () => import('./rozhackovani/rozhackovani.module').then( m => m.RozhackovaniPageModule)
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
