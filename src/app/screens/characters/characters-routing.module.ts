import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      {
        path: 'lista',
        component: ListComponent,
        data: {
          title: 'Lista de personagens',
        },
      },
      {
        path: 'detalhes/:id',
        component: DetailComponent,
        data: {
          title: 'Detalhes do personagem',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CharactersRoutingModule { }
