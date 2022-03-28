import { TestBed } from '@angular/core/testing';

import { WolvesService } from './wolves.service';

describe('WolvesService', () => {
  let service: WolvesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WolvesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
