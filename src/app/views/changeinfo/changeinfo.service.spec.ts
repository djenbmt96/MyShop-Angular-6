import { TestBed, inject } from '@angular/core/testing';

import { ChangeinfoService } from './changeinfo.service';

describe('OrderhistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeinfoService]
    });
  });

  it('should be created', inject([ChangeinfoService], (service: ChangeinfoService) => {
    expect(service).toBeTruthy();
  }));
});
