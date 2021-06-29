import { TestBed } from '@angular/core/testing';
import { UserApi } from './user.service';

describe('UserApi', () => {
  let api: UserApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    api = TestBed.inject(UserApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});
