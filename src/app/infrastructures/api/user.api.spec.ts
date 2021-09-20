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

    const req = httpTestingController.expectOne('/users');
    expect(req.request.method).toEqual('GET');
    req.flush(expected);
  });

  it('getUser()', () => {
    const userId = 1;
    const expected = createMockUser({ id: userId });

    api.getUser(userId).subscribe((resp) => {
      expect(resp).toEqual(expected);
    });

    const req = httpTestingController.expectOne(`/users/${userId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expected);
  });

  it('patchUser()', () => {
    const user = createMockUser({});
    const expected = user;

    api.patchUser(user).subscribe((resp) => {
      expect(resp).toEqual(expected);
    });

    const req = httpTestingController.expectOne(`/users/${user.id}`);
    expect(req.request.method).toEqual('PATCH');
    req.flush(expected);
  });
});
