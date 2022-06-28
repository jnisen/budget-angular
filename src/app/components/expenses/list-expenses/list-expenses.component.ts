import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css'],
})
export class ListExpensesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  budget: number = 0;
  remaining: number = 0;
  listExpenses: any = [];

  constructor(private _budgetService: BudgetService) {
    this.subscription = this._budgetService.getExpense().subscribe((data) => {
      console.log(data);
      this.remaining = this.remaining - data.count;
      this.listExpenses.push(data);
    });
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.remaining = this._budgetService.remaining;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyColor(): string {
    if (this.budget / 4 > this.remaining) {
      return 'alert alert-danger';
    } else if (this.budget / 2 > this.remaining) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }
}
