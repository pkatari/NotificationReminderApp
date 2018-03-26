
import { GetGlobalSettings,GlobalUpdateState } from '../model/globalsettings.model';
import { Action } from '@ngrx/store';

import * as FromActions from '../actions/global.action';

export type Action = FromActions.GlobalAll;

export function globalApplyReducer(state: GetGlobalSettings[]= [], action:Action) {

    switch (action.type) {
    case FromActions.APPLY_GLOBAL_SETTINGS: 
        return action['payload'];
    
    default:
        return state;
    }
}
export function globalUpdateReducer(state: GlobalUpdateState[]= [], action:Action) {

    switch (action.type) {
    case FromActions.GlOBAL_SETTINGS_UPDATE_SUCCESS: 
        return action['payload'];
    
    default:
        return state;
    }
}
