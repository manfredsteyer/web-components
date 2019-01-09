import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalDashboardTileService {

  constructor() { }

  loaded = false;

  load(): void {
    if (this.loaded) return;
    this.loaded = true;

    if (!environment.production) {
      const scriptLegacy = document.createElement('script');
      scriptLegacy.src = 'assets/external-dashboard-tile.legacy.bundle.js';
      document.body.appendChild(scriptLegacy);
      return;
    }

    // TODO: Create a script element (document.createElement)
    //       that points to 'assets/external-dashboard-tile.bundle.js'
    //       and append it to document.body as a child element
    //
    // HINT: The goal is to dynamically add this to the end of the body:
    //         <script src="..."></script>
    const scriptLegacy = document.createElement('script');
    scriptLegacy.src = 'assets/external-dashboard-tile.legacy.bundle.js';
    scriptLegacy.setAttribute('nomodule', '');
    scriptLegacy.type = 'text/javascript';
    scriptLegacy['nomodule'] = true;
    document.body.appendChild(scriptLegacy);
    

    const scriptModern = document.createElement('script');
    scriptModern.src = 'assets/external-dashboard-tile.modern.bundle.js';
    scriptModern.type = 'module'
    document.body.appendChild(scriptModern);

    // END
    
  }

}
