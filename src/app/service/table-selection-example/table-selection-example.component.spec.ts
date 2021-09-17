import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectionExampleComponent } from './table-selection-example.component';

describe('TableSelectionExampleComponent', () => {
  let component: TableSelectionExampleComponent;
  let fixture: ComponentFixture<TableSelectionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSelectionExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
