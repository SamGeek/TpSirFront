import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauKanbanComponent } from './tableau-kanban.component';

describe('TableauKanbanComponent', () => {
  let component: TableauKanbanComponent;
  let fixture: ComponentFixture<TableauKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauKanbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
