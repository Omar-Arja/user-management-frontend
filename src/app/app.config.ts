import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { userReducer } from './store/reducers/user.reducer';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEffects([UserEffects]),
    provideStore({ users: userReducer }),
    provideHttpClient(),
    provideStoreDevtools(),
  ],
};
