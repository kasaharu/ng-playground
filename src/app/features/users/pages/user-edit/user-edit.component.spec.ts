import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEditPageComponent } from './user-edit.component';

describe('UserEditPageComponent', () => {
  let component: UserEditPageComponent;
  let fixture: ComponentFixture<UserEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
