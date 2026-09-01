import { Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'app-dragonball-character-add',
  templateUrl: './dragonball-character-add.html',
})
export class DragonballCharacterAdd {

  //signal para manejar el valor que se introduce en el input
  name = signal<string>('');
  power = signal<number>(0);

  //output para enviar datos al componente padre
  newCharacter = output<Character>();

  //metodo para agregar un nuevo personaje
  public addToCharacter() {

    //validacion de los datos
    if (!this.name() || !this.power() || this.power() < 0) return

    const newObjet: Character = {
      //  id: this.characters().length + 1,
      //genera un id aleatorio
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),

    }
    //  this.characters.update((currentCharacters) => [...currentCharacters, newObjet]);
    // console.log(this.characters());

    console.log(newObjet);

    console.log(newObjet.name, newObjet.power);
    //! el emit lo que hace es enviar el nuevo personaje al componente padre 
    //emite el nuevo personaje al componente padre 
    this.newCharacter.emit(newObjet);


    /*
    powerClass = computed(() => {
        return {
            'text-danger': true,
        }
    })*/
    this.restCamps();
  }

  public restCamps() {

    //con el set establecer un valor inicial 
    this.name.set('');
    this.power.set(0);
  }


}
