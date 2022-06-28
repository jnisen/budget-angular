import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './components/budget/budget.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

const routes: Routes = [
  { path: '', redirectTo: '/budget', pathMatch: 'full' },
  { path: 'budget', component: BudgetComponent },
  {
    path: 'expenses',
    component: ExpensesComponent,
  },
  { path: '**', redirectTo: '/budget', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
