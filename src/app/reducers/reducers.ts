
import * as globalReducer from './global.reducer';
import * as accNotificationReducer from './accnotification.reducer';
import { GlobalUpdateState } from '../model/globalsettings.model';
import { AccordionState } from '../model/accordion.state';

// Application Main State
export interface State {
    updateSettingsData: GlobalUpdateState;
    accNotificationData: AccordionState[];
}

export const reducers = {
    updateSettingsData : globalReducer.globalUpdateReducer,
    accNotificationData : accNotificationReducer.AccordionUpdateReducer
};

