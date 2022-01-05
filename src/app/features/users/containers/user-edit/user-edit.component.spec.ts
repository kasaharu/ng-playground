import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../../domain/user';
import { createMockUser } from '../../../../testing/factories';
import { UserEditComponent } from './user-edit.component';
import { UserEditUsecase } from './user-edit.usecase';

class MockUserEditUsecase {
  user$ = new BehaviorSubject<User | null>(null);
  fetchUser(): void {}
}

describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;
  let usecase: MockUserEditUsecase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditComponent],
      providers: [MockUserEditUsecase],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      teardown: { destroyAfterEach: false },
    })
      .overrideComponent(UserEditComponent, {
        add: { providers: [{ provide: UserEditUsecase, useClass: MockUserEditUsecase }] },
      })
      .compileComponents();

    usecase = TestBed.inject(MockUserEditUsecase);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    usecase.user$.next(createMockUser({}));
    expect(component).toBeTruthy();
  });
});
