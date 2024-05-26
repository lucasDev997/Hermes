import { TestBed } from '@angular/core/testing';

import { GetMarketDataServiceService } from './get-market-data-service.service';

describe('GetMarketDataServiceService', () => {
  let service: GetMarketDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMarketDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
