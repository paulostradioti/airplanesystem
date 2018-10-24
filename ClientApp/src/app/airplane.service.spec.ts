import { TestBed, inject } from '@angular/core/testing';

import { AirplaneService } from './airplane.service';

describe('AirplaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirplaneService]
    });
  });

  it('should be created', inject([AirplaneService], (service: AirplaneService) => {
    expect(service).toBeTruthy();
  }));
});
