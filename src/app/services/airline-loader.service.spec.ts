import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AirlineLoaderService } from './airline-loader.service';

describe('AirlineLoaderService', () => {
  let airlineService: AirlineLoaderService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    airlineService = TestBed.inject(AirlineLoaderService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should call get with correct URL', () => {
    airlineService.loadAirlineData();
    const req = httpTestingController.expectOne('https://api.instantwebtools.net/v1/airlines');
    expect(req.request.method).toBe('GET');
    httpTestingController.verify();
  });


});
