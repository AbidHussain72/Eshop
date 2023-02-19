import { TestBed } from '@angular/core/testing';

import { SellerAuthGuard } from './seller-auth.guard';

describe('SellerAuthGuard', () => {
  let guard: SellerAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellerAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
