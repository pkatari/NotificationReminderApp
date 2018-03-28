import * as FromActions from './global.action';

const payload = {
    weekday : [],
    duringTime : '7:00 am',
    toSelectTime: '7:00 am'
};

const error = {'statusText' : 'not found'};

describe('UpdateGlobalSettings', () => {
    it('should create an action UpdateGlobalSettings', () => {
        const action = new FromActions.UpdateGlobalSettings(payload);
        expect(action.type).toEqual(FromActions.GlOBAL_SETTINGS_UPDATE);
    });
  });
  describe('UpdateGlobalSettingsSuccess', () => {
    it('should create an action UpdateGlobalSettingsSuccess', () => {
        const action = new FromActions.UpdateGlobalSettingsSuccess(payload);

        expect({ ...action }).toEqual({
          type: FromActions.GlOBAL_SETTINGS_UPDATE_SUCCESS,
          payload,
        });
    });
  });
  describe('UpdateGlobalSettingsError', () => {
    it('should create an action UpdateGlobalSettingsError', () => {
        const action = new FromActions.UpdateGlobalSettingsError(error.statusText);
        expect(action.type).toEqual(FromActions.GlOBAL_SETTINGS_UPDATE_FAIL);
    });
  });
