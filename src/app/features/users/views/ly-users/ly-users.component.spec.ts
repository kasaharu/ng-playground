import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyUsersComponent } from './ly-users.component';

describe('LyUsersComponent', () => {
  let component: LyUsersComponent;
  let fixture: ComponentFixture<LyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyUsersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
