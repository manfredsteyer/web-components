import { Component, OnInit } from '@angular/core';
import { ExternalDashboardTileService } from './external-dashboard-tile.service';
import { LazyDashboardTileService } from './lazy-dashboard-tile.service';

@Component({
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  constructor(
    private lazyService: LazyDashboardTileService,
    private externalService: ExternalDashboardTileService
  ) { }


  addTile(): void {
    this._add('dashboard-tile');
  }

  private _add(tileKind: string): void {

    const data =  [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    const tile = document.createElement(tileKind);

    tile.setAttribute('class', 'col-lg-4 col-md-3 col-sm-2');
    tile.setAttribute('a', '' + data[0]);
    tile.setAttribute('b', '' + data[1]);
    tile.setAttribute('c', '' + data[2]);

    const content = document.getElementById('content');
    content.appendChild(tile);

  }

  
  addLazy(): void {
    this.lazyService.load().then(_ => {
      this._add('lazy-dashboard-tile');
    });
  }

  addExternal(): void {
    this.externalService.load();
    this._add('external-dashboard-tile');
  }


}
