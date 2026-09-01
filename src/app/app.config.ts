import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //el hash es para que funcione en cualquier servidor que no tenga configuracion
    //el hash # indica que es un fragmento de la pagina y no se envia al servidor
    //es decir que el servidor no sabe de la existencia de la ruta
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ]
};
