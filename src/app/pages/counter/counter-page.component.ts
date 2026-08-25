import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: 'counter-page.html',
    styleUrl: 'counter-styles.css',

    changeDetection: ChangeDetectionStrategy.OnPush
})



export class CounterPageComponent {

    public counter = 10;
    //con signal puedo manejar el estado de forma reactiva
    counterSignal = signal(10);
    constructor() {

        //este setInterval esta eejecutandoce cada 1000 ms
        //cada vez que se ejecuta , actualiza el valor de counterSignal
        setInterval(() => {
            //this.counter += 1;
            //con el signal actualiza de forma manual con .update
            this.counterSignal.update((value) => value + 1);
            console.log('tick');


        }, 1000);
    }



    public increaseBy(value: number) {
        this.counter += value;
        //update permite modificar el valor del signal en base al valor anterior
        this.counterSignal.update((currentValue) => currentValue + value);

        /*
        if (this.counter <= 0) {
            this.resetCounter();
        }*/
    }
    public resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);

    }

}

/**
 * 
 *  `
    <h1>{{counter}}</h1>
    <h2>CounterPageComponent Page</h2>
    <button (click)="increaseBy( counter )"> +1 </button>
    `
 */