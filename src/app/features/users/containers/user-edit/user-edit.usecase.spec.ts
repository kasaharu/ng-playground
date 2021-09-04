import { TestBed } from '@angular/core/testing';
import { UserApi } from '../../../../infrastructures/api/user.api';
import { UserEditUsecase } from './user-edit.usecase';

class MockUserApi {
  getUser(): void {}
}

describe('UserEditUsecase', () => {
  let usecase: UserEditUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEditUsecase, { provide: UserApi, useClass: MockUserApi }],
    });
    usecase = TestBed.inject(UserEditUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
