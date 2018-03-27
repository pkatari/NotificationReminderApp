import { TestBed, inject } from '@angular/core/testing';
import { AccordionDataService } from './accordiondata.service';

describe('AccordionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccordionDataService]
    });
  });

  it('should be created', inject([AccordionDataService], (service: AccordionDataService) => {
    expect(service).toBeTruthy();
  }));
});
