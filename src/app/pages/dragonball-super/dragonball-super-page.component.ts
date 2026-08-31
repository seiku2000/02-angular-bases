
import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";


interface Characters {
    id: number;
    name: string;
    power: number;
}



@Component({
    templateUrl: 'dragonball-super-page.component.html',
    selector: 'app-dragonball-super',
    imports: [CharacterList],

    //imports: [NgClass],
})

export class DragonballSuperPageComponent {

    name = signal<string>('');
    power = signal<number>(0);

    characters = signal<Characters[]>([{
        id: 1,
        name: 'Goku',
        power: 10000,
    },
    {
        id: 2,
        name: 'Vegeta',
        power: 7500,
    },






    ]);

    public addToCharacter() {

        if (!this.name() || !this.power() || this.power() < 0) return

        const newObjet: Characters = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power(),

        }
        this.characters.update((currentCharacters) => [...currentCharacters, newObjet]);
        console.log(this.characters());

        //console.log(newObjet);

        //console.log(newObjet.name || newObjet.power);

        this.restCamps();
    }

    public restCamps() {
        this.name.set('');
        this.power.set(0);
    }
    /*
        powerClass = computed(() => {
            return {
                'text-danger': true,
            }
        })*/


}