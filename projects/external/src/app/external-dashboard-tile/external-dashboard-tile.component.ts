import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export interface Data {
  a: number;
  b: number;
  c: number;
}

@Component({
  // selector: 'app-external-dashboard-tile',
  templateUrl: './external-dashboard-tile.component.html',
  styleUrls: ['./external-dashboard-tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalDashboardTileComponent implements OnInit {

  private src: number = 0;
  
  data$ = new ReplaySubject<Data>(1);

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.more();
  }

  more() {
    this.src++;
    if (this.src > 3) this.src = 1;

    // publish further data
    this.http
        .get<Data>(`/assets/stats-${this.src}.json`)
        .subscribe(data => this.data$.next(data));
  }

}


