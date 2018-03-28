
import * as globalReducer from './global.reducer';
import * as FromActions from '../actions/global.action';
import { GlobalUpdateState } from '../model/globalsettings.model';

describe('globalUpdateReducer', () => {

    describe('Invalid action', () => {
        it('current state should be returned when no valid action is there', () => {
            const InitialState =  {
                weekday: ['Thu', 'Sat'],
                duringTime: '10:00 am',
                toSelectTime: '12:00 pm',
            };
            const actual = globalReducer.globalUpdateReducer(InitialState , {type: 'INVALID_ACTION'});
            const expected = InitialState ;
            expect(actual).toBe(expected);
        });
    });

  describe('Valid action', () => {
    it('should return the valid action state when valid action is there', () => {

    const testMock = {
        weekday : ['Sun'],
        duringTime : '9:00 am',
        toSelectTime: '10:00 am'
    };
    const InitialState = {
        weekday     : ['Mon'],
        duringTime  : '11:00 am',
        toSelectTime : '12:00 pm'
    };
    const action = new FromActions.UpdateGlobalSettingsSuccess(testMock);
    const state = globalReducer.globalUpdateReducer(InitialState, {type: 'FromActions.GlOBAL_SETTINGS_UPDATE_SUCCESS'});

    expect(action['payload']).toBe(testMock);
    });
  });
});
