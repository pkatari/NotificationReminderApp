import { TestBed, inject } from '@angular/core/testing';
import { GlobalDataService } from './globaldata.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GlobalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalDataService]
    });
  });

  it('should be created', inject([GlobalDataService], (service: GlobalDataService) => {
    expect(service).toBeTruthy();
  }));
});
