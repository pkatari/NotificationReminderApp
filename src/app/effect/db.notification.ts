import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as GlobalActions from '../actions/global.action';
import * as AccordionActions from '../actions/accordion.action';
import { GlobalDataService } from '../service/globaldata.service';
import {AccordionDataService } from '../service/accordiondata.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DataBaseEffects {
  constructor(
    private actions$: Actions,
    private globalService: GlobalDataService,
    private accDataService: AccordionDataService
  ) {}
  @Effect() updateGlobalSettings$ = this.actions$
  .ofType(GlobalActions.GlOBAL_SETTINGS_UPDATE)
  .mergeMap(action =>
    this.globalService.updateGlobalData(action['payload'])
      .map(res => {
        return new GlobalActions.UpdateGlobalSettingsSuccess({
         ...action['payload']
        });
      })
      .catch((error) => Observable.of(new GlobalActions.UpdateGlobalSettingsError(error)))
  );
  @Effect() updateAccordionData$ = this.actions$
  .ofType(AccordionActions.ACCORDION_SETTINGS_UPDATE)
  .mergeMap(action =>
    this.accDataService.updateAcordionData(action['payload'])
      .map(res => {
        return new AccordionActions.UpdateAccordionDataSuccess({
         ...action['payload']
        });
      })
      .catch((error) => Observable.of(new AccordionActions.UpdateAccordionDataError(error)))
  );

}
