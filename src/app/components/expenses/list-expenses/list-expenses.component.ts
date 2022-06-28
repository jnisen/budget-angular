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

  constructor(private _budgetService: BudgetService) {
    this.subscription = this._budgetService.getExpense().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
