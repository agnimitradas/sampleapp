import { TestBed, inject } from '@angular/core/testing';

import { AppActivatorServiceService } from './app-activator-service.service';

describe('AppActivatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppActivatorServiceService]
    });
  });

  it('should be created', inject([AppActivatorServiceService], (service: AppActivatorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
