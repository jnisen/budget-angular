import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ListExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
