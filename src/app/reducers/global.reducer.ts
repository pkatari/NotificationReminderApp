
import { GlobalUpdateState } from '../model/globalsettings.model';
import { Action } from '@ngrx/store';
import * as FromActions from '../actions/global.action';

export type Action = FromActions.GlobalAll;

const InitialGlobalState = {
    weekday : [],
    duringTime : '7:00 am',
    toSelectTime: '7:00 am'
};


// This reducer is triggered when global settings update is successful.
export function globalUpdateReducer(state: GlobalUpdateState = InitialGlobalState, action: Action) {
    console.log(action);

    switch (action.type) {
    case FromActions.GlOBAL_SETTINGS_UPDATE_SUCCESS:
        return action['payload'];
    default:
        return state;
    }
}
