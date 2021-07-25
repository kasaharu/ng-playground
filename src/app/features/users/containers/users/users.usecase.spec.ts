import { TestBed } from '@angular/core/testing';
import { UsersUsecase } from './users.usecase';

describe('UsersUsecase', () => {
  let usecase: UsersUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(UsersUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
