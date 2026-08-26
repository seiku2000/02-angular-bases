import { Component, signal } from "@angular/core";


interface Character {
    id: number;
    name: string;
    power: number;
}



@Component({
    templateUrl: 'dragonball-page.component.html',
})

export class DragonballPageComponent {

    character = signal<Character[]>([{
        id: 1,
        name: 'Goku',
        power: 10000,
    },
    {
        id: 2,
        name: 'Vegeta',
        power: 7500,
    },
    {
        id: 3,
        name: 'Piccolo',
        power: 6000,
    },



    ])
}