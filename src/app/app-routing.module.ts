import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'transaction', pathMatch: 'full' },
  { path: 'transaction', component: TransactionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
