
import * as globalReducer from './global.reducer';
import { GetGlobalSettings } from '../model/globalsettings.model';

export interface State {
    getSettingsData: GetGlobalSettings[];
}

export const reducers = {
    getSettingsData : globalReducer.globalApplyReducer  
};

export const getGlobalReducerData = (state: State) => {
    console.log("Inside getGlobal Reducers Data");
 
    return state.getSettingsData
} 