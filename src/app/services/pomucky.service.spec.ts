import { TestBed } from '@angular/core/testing';

import { PomuckyService } from './pomucky.service';

describe('PomuckyService', () => {
  let service: PomuckyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PomuckyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
