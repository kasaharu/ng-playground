import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { createMockUser } from '../../testing/factories';
import { UserApi } from './user.api';

describe('UserApi', () => {
  let api: UserApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    api = TestBed.inject(UserApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getUsers()', () => {
    const expected = [createMockUser({})];

    api.getUsers().subscribe((resp) => {
      expect(resp).toEqual(expected);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toEqual('GET');
    req.flush(expected);
  });
});
