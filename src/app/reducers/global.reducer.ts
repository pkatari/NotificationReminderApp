
import { GetGlobalSettings } from '../model/globalsettings.model';
import { Action,createSelector,createFeatureSelector  } from '@ngrx/store';

import * as FromActions from '../actions/global.action';

export type Action = FromActions.GetGlobalApplySettings;

export function globalApplyReducer(state: GetGlobalSettings[]= [], action:Action) {

    switch (action.type) {
    case FromActions.APPLY_GLOBAL_SETTINGS: 
        return action['payload'];
    
    default:
        return state;
    }
}

