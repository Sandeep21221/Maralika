import { TestBed } from '@angular/core/testing';

import { EmployerhomeGuard } from './employerhome.guard';

describe('EmployerhomeGuard', () => {
  let guard: EmployerhomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerhomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
