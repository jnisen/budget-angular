import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExpensesComponent } from './input-expenses.component';

describe('InputExpensesComponent', () => {
  let component: InputExpensesComponent;
  let fixture: ComponentFixture<InputExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
