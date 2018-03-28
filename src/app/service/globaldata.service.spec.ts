import { TestBed, getTestBed  } from '@angular/core/testing';
import { GlobalDataService } from './globaldata.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GlobalDataService', () => {
  let injector: TestBed;
  let service: GlobalDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GlobalDataService]
    });
    injector = getTestBed();
    service = injector.get(GlobalDataService);
  });

  describe('#updateGlobalData', () => {
    it('should return an Observable<{}}>', () => {
      const testData = {
        weekday : ['Sun'],
        duringTime : '9:00 am',
        toSelectTime: '10:00 am'
      };
      const testUpdate = {
        weekday : ['Sun'],
        duringTime : '9:00 am',
        toSelectTime: '10:00 am'
     };

      service.updateGlobalData(testData).subscribe(data => {
        data = testUpdate;
        expect(data).toEqual(testUpdate);
      });
    });
    it('should return an error>', () => {
      const error1 = {'statusText' : 'not found'};
      service.updateGlobalData(error1).subscribe(error => {
        expect(error1.statusText).toEqual('not found');
      });
    });
  });

});
