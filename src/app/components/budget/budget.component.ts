import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  count: number;
  countError: boolean;
  constructor(private _budgetService: BudgetService, private router: Router) {
    this.count = 0;
    this.countError = false;
  }

  ngOnInit(): void {}

  addBudget(): void {
    if (this.count <= 0) {
      this.countError = true;
      return;
    }
    this.countError = false;
    this._budgetService.budget = this.count;
    this._budgetService.remaining = this.count;
    this.router.navigate(['/expenses'])
  }
}
