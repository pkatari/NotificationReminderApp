import { Action } from '@ngrx/store'; 
import { AccordionState } from '../model/accordion.state';

export const ACCORDION_SETTINGS_UPDATE = '[ACCORDION] Update aAccordion Settings';
export const ACCORDION_SETTINGS_UPDATE_SUCCESS = '[ACCORDION] Update Accordion Settings Success';
export const ACCORDION_SETTINGS_UPDATE_FAIL = '[ACCORDION] Update Accordion Settings Fail';


export class UpdateAccordionData implements Action {
    readonly type = ACCORDION_SETTINGS_UPDATE
    constructor(public payload:AccordionState[]){
        console.log("Action Update Accordion Data");
    } 
} 
 
export class UpdateAccordionDataSuccess implements Action {
    readonly type = ACCORDION_SETTINGS_UPDATE_SUCCESS 
    constructor(public payload: AccordionState[]){
        console.log("Action Update Accordion Data Success");
    } 
} 
 
export class UpdateAccordionDataError implements Action {
    readonly type = ACCORDION_SETTINGS_UPDATE_FAIL 
    constructor(payload: {}){
        console.log("Action Update Accordion Data Error");
    } 
 
} 
export type AccordionAll = UpdateAccordionData | UpdateAccordionDataSuccess | UpdateAccordionDataError;