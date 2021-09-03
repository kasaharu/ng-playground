import { TestBed } from '@angular/core/testing';

import { UserEditUsecase } from './user-edit.usecase';

describe('UserEditUsecase', () => {
  let usecase: UserEditUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(UserEditUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
