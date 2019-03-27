
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import{CoachserviceService} from "../../shared/coachservice.service";
import { core } from '@angular/compiler';
@Injectable()
export class EditUserResolver implements Resolve<any> {

  constructor(public service: CoachserviceService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let userId = route.paramMap.get('id');
      this.service.getUserss(userId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}