import { TestBed } from '@angular/core/testing';

import { VyukaService } from './vyuka.service';

describe('VideoService', () => {
  let service: VyukaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VyukaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
  