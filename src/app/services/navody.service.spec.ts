import { TestBed } from '@angular/core/testing';

import { NavodyService } from './navody.service';

describe('NavodyService', () => {
  let service: NavodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
