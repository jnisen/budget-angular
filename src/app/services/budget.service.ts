import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: number;
  remaining: number;
  private expense$ = new Subject<any>();

  constructor() {
    this.budget = 0;
    this.remaining = 0;
  }

  addExpense(expense: any) {
    this.remaining = this.remaining - expense.count;
    this.expense$.next(expense);
  }

  getExpense(): Observable<any> {
    return this.expense$.asObservable();
  }
}
