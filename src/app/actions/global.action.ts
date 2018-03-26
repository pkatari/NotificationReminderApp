import { Action } from '@ngrx/store'; 
import { GetGlobalSettings, GlobalUpdateState } from '../model/globalsettings.model';

export const APPLY_GLOBAL_SETTINGS = '[Global] Global Apply'; 
export const GlOBAL_SETTINGS_UPDATE = '[Global] Update Global Settings';
export const GlOBAL_SETTINGS_UPDATE_SUCCESS = '[GlOBAL] Update Global Settings Success';
export const GlOBAL_SETTINGS_UPDATE_FAIL = '[GlOBAL] Update Global Settings Fail';

export class GetGlobalApplySettings implements Action {
    readonly type = APPLY_GLOBAL_SETTINGS; 
    constructor(public payload: GetGlobalSettings[]) {
       console.log("Action GetGlobalApplySettings");
    };
} 

//This action is dispatched when'Apply' button is clicked.
export class UpdateGlobalSettings implements Action {
    readonly type = GlOBAL_SETTINGS_UPDATE
    constructor(public payload: GlobalUpdateState[]){
        console.log("Action Update Global settings");
    } 
} 

/*This action is dispatched by effect updateGlobalSetting once service 
successfully saves data */
export class UpdateGlobalSettingsSuccess implements Action {
    readonly type = GlOBAL_SETTINGS_UPDATE_SUCCESS  
    constructor(public payload: GlobalUpdateState[]){
        console.log("Action UpdateGlobalSettingsSuccess");
    } 
} 
//This action is dispatched by effect updateGlobalSetting in case there is error
export class UpdateGlobalSettingsError implements Action {
    readonly type = GlOBAL_SETTINGS_UPDATE_FAIL
    constructor(payload: {}){
        console.log("Action UpdateGlobalSettingsError");
    } 
 
} 
export type GlobalAll = GetGlobalApplySettings | UpdateGlobalSettings  | UpdateGlobalSettingsSuccess  | UpdateGlobalSettingsError;