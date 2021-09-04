import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvParserComponent } from './csv-parser.component';

describe('CsvParserComponent', () => {
  let component: CsvParserComponent;
  let fixture: ComponentFixture<CsvParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvParserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
