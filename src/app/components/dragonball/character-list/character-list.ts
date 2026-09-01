import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.html',

})
export class CharacterList {
  //input para recibir los datos del componente padre 
  characters = input.required<Character[]>();

  //input para recibir el titulo de la lista 
  listName = input<string>();


}
