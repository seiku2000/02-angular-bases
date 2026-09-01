
import { Component, inject, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";
import { Character } from "../../interfaces/character.interfaces";
import { DragonBallService } from "../../services/dragonball.service";

/*
interface Characters {
    id: number;
    name: string;
    power: number;
}*/



@Component({
    templateUrl: 'dragonball-super-page.component.html',
    selector: 'app-dragonball-super',
    imports: [CharacterList, DragonballCharacterAdd],

    //imports: [NgClass],
})

export class DragonballSuperPageComponent {






    //version vieja de inyeccion de dependencias
    //constructor(public dragonballService: DragonBallService) { }


    public dragonballService = inject(DragonBallService);



}