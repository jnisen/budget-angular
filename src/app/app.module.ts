import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { BudgetComponent } from './components/budget/budget.component';
import { InputExpensesComponent } from './components/expenses/input-expenses/input-expenses.component';
import { ListExpensesComponent } from './components/expenses/list-expenses/list-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    BudgetComponent,
    InputExpensesComponent,
    ListExpensesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
