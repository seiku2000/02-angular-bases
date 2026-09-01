import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';



const loadFromLocalStorage = (): Character[] => {
    const character = localStorage.getItem('characters');
    if (!character) return [];
    return JSON.parse(character);

}




//este decorador indica que esta clase es un servicio y que se puede inyectar en otros componentes
//el providedIn: 'root' indica que se puede inyectar en cualquier parte de la aplicacion
//es una nueva forma de inyeccion de dependencias
//y el 'root' significa que se puede inyectar en cualquier parte de la aplicacion
@Injectable({ providedIn: 'root' })
export class DragonBallService {
    // constructor() { }
    characters = signal<Character[]>(loadFromLocalStorage());
    //los effects se ejecutan cada vez que hay un cambio en el signal  
    //solo usemoas para una tarea en espesfica y que no hagan mas de eso
    saveToLocalStorage = effect(() => {

        //console.log(`Characters count ${this.characters().length}`)
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    })



    public addToCharacter(character: Character) {
        this.characters.update((list) => [...list, character]);

        //this.characters.update((currentCharacters) => [...currentCharacters, newObjet]);
        // console.log(this.characters());


    }

}