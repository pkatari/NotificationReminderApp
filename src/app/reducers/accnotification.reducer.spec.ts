
import * as accordionReducer from './accnotification.reducer';
import * as FromActions from '../actions/accordion.action';
import { AccordionState } from '../model/accordion.state';

const InitialState = [{
    id: 1,
    titleAccordion: 'Test Title',
    weekday: ['Mon'],
    duringTime: '7:00 am',
    toSelectTime: '7:00 am',
    daysFrequency: [1, 2, 3, 4]
}];

describe('Accordion Notification Reducer', () => {

    describe('Invalid action', () => {
        it('current state should be returned when no valid action is there', () => {
            const actual = accordionReducer.AccordionUpdateReducer(InitialState , {type: 'INVALID_ACTION'});
            const expected = InitialState ;
            expect(actual).toBe(expected);
        });
    });

  describe('Valid action', () => {
    it('should return the valid action state when valid action is there', () => {

    const testMock = [{
        id: 1,
        titleAccordion: 'Test Mock Title',
        weekday: ['Mon', 'Tue'],
        duringTime: '8:00 am',
        toSelectTime: '8:00 am',
        daysFrequency: [1, 2, 3, 4]
    }];

    const action = new FromActions.UpdateAccordionDataSuccess(testMock);
    const state = accordionReducer.AccordionUpdateReducer(InitialState, {type: 'FromActions.ACCORDION_SETTINGS_UPDATE_SUCCESS'});
    expect(action['payload']).toBe(testMock);
    });
  });
});
