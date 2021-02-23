// the default is the dev/test mode but for production build the
// the optimization will be applied
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // this will load the Angular Production Optimization(?)
  enableProdMode();
}
// boostarp Angular Module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
