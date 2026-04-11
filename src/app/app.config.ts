import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';
import { provideEnvironmentNgxMask } from 'ngx-mask';

import { lucideIconAliases } from './core/config/lucide-icon-aliases';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideEnvironmentNgxMask(),
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(lucideIconAliases),
    },
  ],
};
