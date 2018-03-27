
import * as globalReducer from './global.reducer';
import * as accNotificationReducer from './accnotification.reducer';
import { GetGlobalSettings, GlobalUpdateState } from '../model/globalsettings.model';
import { AccordionState } from '../model/accordion.state';

// Application Main State
export interface State {
    getSettingsData: GetGlobalSettings[];
    updateSettingsData: GlobalUpdateState[];
    accNotificationData: AccordionState[];
}

export const reducers = {
    getSettingsData : globalReducer.globalApplyReducer,
    updateSettingsData : globalReducer.globalUpdateReducer,
    accNotificationData : accNotificationReducer.AccordionUpdateReducer
};

