import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,
      //?Configuration - load all lazy components 
      //* withPreloading(PreloadAllModules)
      
      //?For debugging
      //* withDebugTracing()
    ),
    provideHttpClient(withInterceptors([httpInterceptor])),
  ]
};
