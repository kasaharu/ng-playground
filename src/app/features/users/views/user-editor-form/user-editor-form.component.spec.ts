import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { User } from '../../../../domain/user';
import { createMockUser } from '../../../../testing/factories';
import { UserEditorFormComponent } from './user-editor-form.component';

@Component({
  template: '<app-user-editor-form [user]="user"></app-user-editor-form>',
})
class TestHostComponent {
  user: User = createMockUser({});
}

describe('UserEditorFormComponent', () => {
  let component: UserEditorFormComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserEditorFormComponent, TestHostComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.query(By.directive(UserEditorFormComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
