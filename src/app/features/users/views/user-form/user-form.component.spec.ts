import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { createMockUser } from '../../../../testing/factories';
import { UserFormComponent } from './user-form.component';

@Component({
  template: '<app-user-form [user]="user"></app-user-form>',
})
class TestHostComponent {
  user = createMockUser({});
}

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(UserFormComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
