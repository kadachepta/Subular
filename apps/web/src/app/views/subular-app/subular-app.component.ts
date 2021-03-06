import { Component } from '@angular/core';
import { SubsonicCachedService, SubularAppBaseComponent } from '@Subular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'subular-app',
  templateUrl: 'subular-app.component.html',
  styleUrls: ['subular-app.component.css']
})
export class SubularAppComponent extends SubularAppBaseComponent {
  constructor(
    cachedData: SubsonicCachedService,
    route: ActivatedRoute,
    router: Router
  ) {
    super(cachedData, route, router);
  }
}
