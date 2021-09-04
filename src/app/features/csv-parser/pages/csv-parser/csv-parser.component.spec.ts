import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsvParserPageComponent } from './csv-parser.component';

describe('CsvParserPageComponent', () => {
  let component: CsvParserPageComponent;
  let fixture: ComponentFixture<CsvParserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvParserPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvParserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
