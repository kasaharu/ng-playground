import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditorFormComponent } from './user-editor-form.component';

describe('UserEditorFormComponent', () => {
  let component: UserEditorFormComponent;
  let fixture: ComponentFixture<UserEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
