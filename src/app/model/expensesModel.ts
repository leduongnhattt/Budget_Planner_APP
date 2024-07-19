export interface Expense {
  expenseType: string;
  expenseAmount: number;
}

export const monthlyExpenses: { [key: string]: Expense[] } = {
  'January': [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 }
  ],
  'February': [
    { expenseType: 'Utilities', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ],
  'March': [
    { expenseType: 'Rent', expenseAmount: 1100 },
    { expenseType: 'Utilities', expenseAmount: 250 }
  ],
  'April': [
    { expenseType: 'Rent', expenseAmount: 1050 },
    { expenseType: 'Groceries', expenseAmount: 550 }
  ],
  'May': [
    { expenseType: 'Utilities', expenseAmount: 220 },
    { expenseType: 'Groceries', expenseAmount: 500 }
  ],
  'June': [
    { expenseType: 'Rent', expenseAmount: 1150 },
    { expenseType: 'Utilities', expenseAmount: 260 }
  ],
  'July': [
    { expenseType: 'Rent', expenseAmount: 1200 },
    { expenseType: 'Groceries', expenseAmount: 600 }
  ],
  'August': [
    { expenseType: 'Utilities', expenseAmount: 240 },
    { expenseType: 'Groceries', expenseAmount: 550 }
  ],
  'September': [
    { expenseType: 'Rent', expenseAmount: 1100 },
    { expenseType: 'Utilities', expenseAmount: 270 }
  ],
  'October': [
    { expenseType: 'Rent', expenseAmount: 1250 },
    { expenseType: 'Groceries', expenseAmount: 600 }
  ],
  'November': [
    { expenseType: 'Utilities', expenseAmount: 260 },
    { expenseType: 'Groceries', expenseAmount: 580 }
  ],
  'December': [
    { expenseType: 'Rent', expenseAmount: 1300 },
    { expenseType: 'Utilities', expenseAmount: 280 }
  ]
};
