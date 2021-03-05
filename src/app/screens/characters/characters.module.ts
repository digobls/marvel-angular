import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, CharactersComponent, CharacterCardComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})

export class CharactersModule { }
