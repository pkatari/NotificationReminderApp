import * as FromActions from './accordion.action';

const payload = [{
    id: 1,
    titleAccordion: 'Test Mock Title',
    weekday: ['Mon', 'Tue'],
    duringTime: '8:00 am',
    toSelectTime: '8:00 am',
    daysFrequency: [1, 2, 3, 4]
}];

const error = {'statusText' : 'not found'};

describe('UpdateAccordionData', () => {
    it('should create an action UpdateAccordionData', () => {
        const action = new FromActions.UpdateAccordionData(payload);
        expect(action.type).toEqual(FromActions.ACCORDION_SETTINGS_UPDATE);
    });
  });
  describe('UpdateAccordionDataSuccess', () => {
    it('should create an action .UpdateAccordionDataSuccess', () => {
        const action = new FromActions.UpdateAccordionDataSuccess(payload);

        expect({ ...action }).toEqual({
          type: FromActions.ACCORDION_SETTINGS_UPDATE_SUCCESS,
          payload,
        });
    });
  });
  describe('UpdateAccordionDataError', () => {
    it('should create an action UpdateAccordionDataError', () => {
        const action = new FromActions.UpdateAccordionDataError(error.statusText);
        expect(action.type).toEqual(FromActions.ACCORDION_SETTINGS_UPDATE_FAIL);
    });
  });

