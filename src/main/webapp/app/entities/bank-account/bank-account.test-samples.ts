import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 15737,
  name: 'apropos',
  balance: 17017.82,
};

export const sampleWithPartialData: IBankAccount = {
  id: 23247,
  name: 'anxiously above',
  balance: 1540.34,
};

export const sampleWithFullData: IBankAccount = {
  id: 29212,
  name: 'toward',
  balance: 29134.43,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'mmm',
  balance: 15198.99,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
