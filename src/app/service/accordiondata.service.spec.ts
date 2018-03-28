import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccordionDataService } from './accordiondata.service';

describe('AccordionDataService', () => {
  let accordionService: AccordionDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AccordionDataService
      ]
    });

    accordionService = TestBed.get(AccordionDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should successfully get accordion update data', (done) => {
       const mockData  =    [
        {
          id: 1,
          titleAccordion: 'Test Mock Title',
          weekday: ['Mon', 'Tue'],
          duringTime: '8:00 am',
          toSelectTime: '8:00 am',
          daysFrequency: [1, 2, 3, 4]
        },
        {
          id: 1,
          titleAccordion: 'Test Mock Title',
          weekday: ['Mon', 'Tue'],
          duringTime: '8:00 am',
          toSelectTime: '8:00 am',
          daysFrequency: [1, 2, 3, 4]
        }
      ];
      accordionService.getAccordionData().subscribe(data => {
        expect(data.length).toBe(2);
        expect(data).toEqual(mockData);
        done();
      });

      const req = httpMock.expectOne('../../assets/accordionstate.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
  });

});
