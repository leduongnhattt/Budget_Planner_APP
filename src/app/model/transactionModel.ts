export interface Transaction {
  transactionType: string;
  transactionAmount: number;
  selected?: boolean;  // Add this line
}

export const monthlyTransaction: { [key: string]: Transaction[] } = {
  'January': [
    { transactionType: 'Recharge', transactionAmount: 1000, selected: false },
    { transactionType: 'Light Bills', transactionAmount: 500, selected: false }
  ],
  'February': [
    { transactionType: 'Essentials', transactionAmount: 200, selected: false },
    { transactionType: 'Light Bills', transactionAmount: 400, selected: false }
  ],
  'March': [
    { transactionType: 'Recharge', transactionAmount: 1100, selected: false },
    { transactionType: 'Essentials', transactionAmount: 250, selected: false }
  ],
  'April': [
    { transactionType: 'Rent', transactionAmount: 1050, selected: false },
    { transactionType: 'Groceries', transactionAmount: 550, selected: false }
  ],
  'May': [
    { transactionType: 'Utilities', transactionAmount: 220, selected: false },
    { transactionType: 'Groceries', transactionAmount: 500, selected: false }
  ],
  'June': [
    { transactionType: 'Rent', transactionAmount: 1150, selected: false },
    { transactionType: 'Utilities', transactionAmount: 260, selected: false }
  ],
  'July': [
    { transactionType: 'Rent', transactionAmount: 1200, selected: false },
    { transactionType: 'Groceries', transactionAmount: 600, selected: false }
  ],
  'August': [
    { transactionType: 'Utilities', transactionAmount: 240, selected: false },
    { transactionType: 'Groceries', transactionAmount: 550, selected: false }
  ],
  'September': [
    { transactionType: 'Rent', transactionAmount: 1100, selected: false },
    { transactionType: 'Utilities', transactionAmount: 270, selected: false }
  ],
  'October': [
    { transactionType: 'Rent', transactionAmount: 1250, selected: false },
    { transactionType: 'Groceries', transactionAmount: 600, selected: false }
  ],
  'November': [
    { transactionType: 'Utilities', transactionAmount: 260, selected: false },
    { transactionType: 'Groceries', transactionAmount: 580, selected: false }
  ],
  'December': [
    { transactionType: 'Rent', transactionAmount: 1300, selected: false },
    { transactionType: 'Utilities', transactionAmount: 280, selected: false }
  ]
};
