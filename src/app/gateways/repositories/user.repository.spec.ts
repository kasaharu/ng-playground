import { TestBed } from '@angular/core/testing';
import { UserApi } from '../../infrastructures/api/user.api';
import { UserRepository } from './user.repository';
class MockUserApi {
  getUsers(): void {}
}

describe('UserRepository', () => {
  let repository: UserRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: UserApi, useClass: MockUserApi }],
    });
    repository = TestBed.inject(UserRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });
});
