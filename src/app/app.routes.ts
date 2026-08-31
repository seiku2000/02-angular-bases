import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
    {
        path: 'counter',
        component: CounterPageComponent,

    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'dragonball', //esto es un path o una ruta 
        component: DragonballPageComponent //este es el componente que se va a renderizar cuando se visite el path
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPageComponent
    },

    {
        path: '**',// este es un comodin para cualquier otra ruta no definida 
        redirectTo: 'counter' //nos redirige a la ruta counter
    },


];
