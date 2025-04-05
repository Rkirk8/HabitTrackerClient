import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { routes } from './app.routes';

// data services to connect to backend API
import { HabitService } from './services/habit.service';
import { provideHttpClient } from '@angular/common/http';
//--Import Transloco -----------------------------------------------------------------------------------------------
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    HabitService,
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: 'en'
    }), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['en', 'es', 'fr'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })
  ]
};
