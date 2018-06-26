import { TestBed, inject } from '@angular/core/testing';

import { OrderhistoryService } from './orderhistory.service';

describe('OrderhistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderhistoryService]
    });
  });

  it('should be created', inject([OrderhistoryService], (service: OrderhistoryService) => {
    expect(service).toBeTruthy();
  }));
});
