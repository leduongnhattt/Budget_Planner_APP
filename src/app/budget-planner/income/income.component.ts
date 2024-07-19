
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { monthlyIncomes } from '../../model/monthIncome';
import { Income } from '../../model/incomes';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: string;
  monthSelected: boolean = false;
  filteredIncomes: Income[] = [];

  constructor(public formBuilder: FormBuilder, public router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.incomeForm = this.formBuilder.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      investments: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  onChange(event: any): void {
    this.selectedMonth = event.target.value;
    this.monthSelected = this.selectedMonth !== 'Select Month'
  }

  getFilteredIncomes(month: string): Income[] {
    return monthlyIncomes[month] || [];
  }


  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getFilteredIncomes(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  onSubmit() {
    console.log(this.filteredIncomes);
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      // Push the new income into the selected month's incomes array
      monthlyIncomes[this.selectedMonth].push(newIncome);

      // Reset the form and clear values
      this.incomeForm.reset();
      this.incomeForm.patchValue({ month: '', source: '', amount: '', investments: '' });
      
    }
  }


    saveForm() {
      console.log("Form saved!");
    }

    onBack() {
      this.router.navigate(['/budget-planner/dashboard']);
    }

}
