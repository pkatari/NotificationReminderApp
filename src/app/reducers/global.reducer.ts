
import { GetGlobalSettings } from '../model/globalsettings.model';
import { Action,createSelector,createFeatureSelector  } from '@ngrx/store';

import * as FromActions from '../actions/global.action';

export type Action = FromActions.GetGlobalApplySettings;

export function globalApplyReducer(state: GetGlobalSettings[]= [], action:Action) {

   console.log("apppp..........")

  var a = Object.assign({}, action['payload']);
  console.log("a.............")
  console.log(a)
    switch (action.type) {
    case FromActions.APPLY_GLOBAL_SETTINGS: 
        return action['payload'];
    
    default:
        return state;
    }
}

