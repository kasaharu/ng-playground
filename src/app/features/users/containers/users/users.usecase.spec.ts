import { TestBed } from '@angular/core/testing';
import { UserApi } from '../../../../infrastructures/api/user.api';
import { UsersUsecase } from './users.usecase';

class MockUserApi {
  getUsers(): void {}
}

describe('UsersUsecase', () => {
  let usecase: UsersUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersUsecase, { provide: UserApi, useClass: MockUserApi }],
    });
    usecase = TestBed.inject(UsersUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
