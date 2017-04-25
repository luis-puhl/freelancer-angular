import { TestBed, inject } from '@angular/core/testing';

import { PortifolioService } from './portifolio.service';

describe('PortifolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortifolioService]
    });
  });

  it('should ...', inject([PortifolioService], (service: PortifolioService) => {
    expect(service).toBeTruthy();
  }));
});
