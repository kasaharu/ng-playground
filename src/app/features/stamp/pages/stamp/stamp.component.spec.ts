import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampPageComponent } from './stamp.component';

describe('StampComponent', () => {
  let component: StampPageComponent;
  let fixture: ComponentFixture<StampPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StampPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StampPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
