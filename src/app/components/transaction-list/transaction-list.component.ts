import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: any;
  latestTransaction: any;
  title = '';

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.retrieveTransactions();
    this.retrieveLatestTransaction();
  }

  retrieveTransactions(): void {
    this.transactionService.getAll()
      .subscribe(
        data => {
          this.transactions = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveLatestTransaction(): void {
    this.transactionService.getLatest()
      .subscribe(
        data => {
          this.latestTransaction = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTransactions();
    this.retrieveLatestTransaction();
  }
}
