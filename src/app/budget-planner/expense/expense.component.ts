import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Expense, monthlyExpenses } from '../../model/expensesModel';


@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  expenseForm: any;
  selectedMonth: string;
  monthSelected: boolean = false;
  filteredExpenses: Expense[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }
  ngOnInit(): void {
   this.expenseForm = this.formBuilder.group({
    month: ['', Validators.required],
    expenseType: ['', Validators.required],
    expenseAmount: ['', Validators.required]
   })
  }
  onChangeExpense(event: any){
    this.selectedMonth = event.target.value
     this.monthSelected = this.selectedMonth !== 'Select Month'
  }
  getFilteredExpenses(month: string){
    return monthlyExpenses[month]|| []
  }
  onSubmitExpense() {
    if(this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      monthlyExpenses[this.selectedMonth].push(newExpense);
      this.expenseForm.reset();
    }
  }
  calculateTotalExpense(month: string): number {
    return this.getFilteredExpenses(month).reduce((acc, cur) => acc + cur.expenseAmount, 0);
  }
  saveForm() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      this.getFilteredExpenses(this.selectedMonth).push(newExpense); // Add the new expense to the filtered list
      this.expenseForm.reset({ month: this.selectedMonth }); // Reset the form with the selected month
      console.log("Form saved!"); // Log to console
    }
  }
  onBack() {
    this.router.navigate(['budget-planner/dashboard'])
  }
}
