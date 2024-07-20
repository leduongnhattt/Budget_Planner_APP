import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { monthlyTransaction, Transaction } from '../../model/transactionModel';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SideNavComponent, MatIconModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  todoForm: any;
  selectedMonth: any;
  monthSelected: boolean = false;
  filteredTransaction: Transaction[] = [];
  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    this.selectedMonth = currentMonth;
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      transactionType: ['', Validators.required],
      transactionAmount: ['', Validators.required]
    });
  }

  onChangeTransaction(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = this.selectedMonth !== 'Select Month'
  }

  getFilteredTransaction(month: string) {
    return  monthlyTransaction[month] || []
  }

  calculateTotalTransaction(month: string): number {
    let totalTransaction = 0;
    for (const income of this.getFilteredTransaction(month)) {
      totalTransaction += income.transactionAmount;
    }
    return totalTransaction;
  }


  onSubmitTransaction() {
    if (this.todoForm.valid) {
      const newTransaction = this.todoForm.value;
      monthlyTransaction[this.selectedMonth].push(newTransaction)
      console.log(monthlyTransaction[this.selectedMonth])
      this.todoForm.reset();
      this.todoForm.patchValue({ month: '', transactionType: '', transactionAmount: '' });
    }
  }

  onSave() {
    if (this.todoForm.valid) {
      const incomeData = this.todoForm.value;
      this.todoForm.reset({ month: this.selectedMonth });
      this.getFilteredTransaction(this.selectedMonth);
    }
  }

  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

}
