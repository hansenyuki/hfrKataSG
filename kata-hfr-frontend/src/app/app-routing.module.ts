import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

const routes: Routes = [
  {
    path: 'kataHfr',
    loadChildren: () => import('./kata-hfr/kata-hfr.module').then(m => m.KataHfrModule)
  },
  {
    path: '',
    redirectTo: '/kataHfr',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'kataHfr',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxsRouterPluginModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
