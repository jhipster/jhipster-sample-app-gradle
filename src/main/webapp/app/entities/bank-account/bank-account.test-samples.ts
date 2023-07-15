import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 17006,
  name: 'eos',
  balance: 17054,
};

export const sampleWithPartialData: IBankAccount = {
  id: 7536,
  name: 'Elegant mint',
  balance: 71848,
};

export const sampleWithFullData: IBankAccount = {
  id: 22893,
  name: 'Marketing female Specialist',
  balance: 54429,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Loan Wagon',
  balance: 32980,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
