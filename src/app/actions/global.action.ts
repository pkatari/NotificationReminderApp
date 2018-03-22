
import { Action } from '@ngrx/store'; 
import { GetGlobalSettings } from '../model/globalsettings.model';
export const APPLY_GLOBAL_SETTINGS = 'Global Apply'; 

export class GetGlobalApplySettings implements Action {
    readonly type = APPLY_GLOBAL_SETTINGS; 
    constructor(public payload: GetGlobalSettings[]) {
 
    };
} 


