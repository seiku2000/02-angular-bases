import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    templateUrl: 'hero-page.component.html',
    styleUrl: 'hero-page.component.css',
    imports: [UpperCasePipe]//! importamos el pipe para poder usarlo en el template
})
export class HeroPageComponent {
    //name: string = 'Iro man';
    //age: number = 40;
    //la signal es una forma reactiva de manejar el estado
    //se usa para manejar el estado de una señal  
    name = signal<string>('Iroman');
    age = signal<number>(45)

    constructor() {
        console.log('hero page component')
    }
    //computed  lo que hace es ejecutarce cuando el signal cambia y devuelve un valor  unicamente cuando el signal cambia 
    public heroDescripcion = computed(() => {
        const descripcion = `${this.name()} - ${this.age()}`
        return descripcion
    });
    //son solo lectura y no se puede modificar
    public nameToUpperCase = computed(() => this.name().toLocaleUpperCase());
    /*
    public getNameUpperCase() {
        return `${this.name().toLocaleUpperCase()}`

    };*/

    public changeHero() {

        //set permite cambiar el valor del signal a un nuevo valor
        this.name.set('spiderman');
        this.age.set(22);


    };

    public changedAge() {
        // update permite modificar el valor del signal en base al valor anterior
        this.age.update((currentValue) => currentValue = 60);

    };

    public resetForm() {
        this.name.set('Iroman');
        this.age.set(45);

    };

}


