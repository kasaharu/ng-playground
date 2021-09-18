import { TestBed } from '@angular/core/testing';
import { UserRepository } from '../../../../gateways/repositories/user.repository';
import { UsersUsecase } from './users.usecase';

class MockUserRepository {
  fetchUsers(): void {}
}

describe('UsersUsecase', () => {
  let usecase: UsersUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersUsecase, { provide: UserRepository, useClass: MockUserRepository }],
    });
    usecase = TestBed.inject(UsersUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
