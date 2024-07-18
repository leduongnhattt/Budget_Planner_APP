import { Income } from "./incomes"

export const monthlyIncomes: {[key: string]: Income[]} = {
  January: [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ],
  February: [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ],
  March: [
    { source: 'Salary', amount: 5300, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ],
  April: [
    { source: 'Salary', amount: 5400, investments: '401(k)' },
    { source: 'Freelancing', amount: 1300, investments: 'Stocks' },
  ],
  May: [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Freelancing', amount: 1400, investments: 'Stocks' },
  ],
  June: [
    { source: 'Salary', amount: 5600, investments: '401(k)' },
    { source: 'Freelancing', amount: 1500, investments: 'Stocks' },
  ],
  July: [
    { source: 'Salary', amount: 5700, investments: '401(k)' },
    { source: 'Freelancing', amount: 1600, investments: 'Stocks' },
  ],
  August: [
    { source: 'Salary', amount: 5800, investments: '401(k)' },
    { source: 'Freelancing', amount: 1700, investments: 'Stocks' },
  ],
  September: [
    { source: 'Salary', amount: 5900, investments: '401(k)' },
    { source: 'Freelancing', amount: 1800, investments: 'Stocks' },
  ],
  October: [
    { source: 'Salary', amount: 6000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1900, investments: 'Stocks' },
  ],
  November: [
    { source: 'Salary', amount: 6100, investments: '401(k)' },
    { source: 'Freelancing', amount: 2000, investments: 'Stocks' },
  ],
  December: [
    { source: 'Salary', amount: 6200, investments: '401(k)' },
    { source: 'Freelancing', amount: 2100, investments: 'Stocks' },
  ],
}
