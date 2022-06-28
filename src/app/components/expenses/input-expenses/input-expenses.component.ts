import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-input-expenses',
  templateUrl: './input-expenses.component.html',
  styleUrls: ['./input-expenses.component.css'],
})
export class InputExpensesComponent implements OnInit {
  nameExpense: string;
  count: number;
  formError: boolean;
  textError: string;
  check: boolean = true;
  constructor(private _budgetService: BudgetService) {
    this.nameExpense = '';
    this.count = 0;
    this.formError = false;
    this.textError = '';
  }

  ngOnInit(): void {}

  addExpense(): void {
    if (this.count > this._budgetService.budget) {
      this.formError = true;
      this.textError = 'Expenses can not be greater than budget';
      return;
    }

    if (this.count > this._budgetService.remaining) {
      this.formError = true;
      this.textError = 'Amount can not be greater than remaining';
      return;
    }

    if (this.nameExpense === '' || this.count <= 0) {
      this.formError = true;
      this.textError = 'Name or count are incorrect';
      return;
    }

    const expenses = {
      name: this.nameExpense,
      count: this.count,
    };

    this._budgetService.addExpense(expenses);

    this.formError = false;
    this.nameExpense = '';
    this.count = 0;
  }

  checkRemaining(): boolean {
    if (this._budgetService.remaining === 0) {
      this.formError = true;
      this.textError = 'No more expenses';
      return true;
    }
    this.formError = false;
    return false;
  }
}
