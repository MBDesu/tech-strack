import { TestBed } from '@angular/core/testing';

import { EndOfLifeService } from './end-of-life.service';

describe('EndOfLifeService', () => {
  let service: EndOfLifeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndOfLifeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
