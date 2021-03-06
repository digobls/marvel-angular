import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/personagens/lista`,
  },
  {
    path: 'personagens',
    loadChildren: () => import('./screens/characters/characters.module').then((m) => m.CharactersModule),
    data: {
      title: '',
      hideHeader: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppRoutingModule { }
