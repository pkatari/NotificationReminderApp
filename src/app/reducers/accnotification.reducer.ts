
import { AccordionState } from '../model/accordion.state';
import { Action } from '@ngrx/store';
import * as FromActions from '../actions/accordion.action';

export type Action = FromActions.AccordionAll;

//This reducer is triggered when accordion notification update is successful
export function AccordionUpdateReducer(state: AccordionState[]= [], action:Action) {

    switch (action.type) {
    case FromActions.ACCORDION_SETTINGS_UPDATE_SUCCESS: 
        return action['payload'];
    
    default:
        return state;
    }
}
