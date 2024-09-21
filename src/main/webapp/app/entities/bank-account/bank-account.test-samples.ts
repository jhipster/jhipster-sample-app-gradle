import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 18760,
  name: 'aside',
  balance: 3433.49,
};

export const sampleWithPartialData: IBankAccount = {
  id: 9768,
  name: 'outrank flood',
  balance: 21859.04,
};

export const sampleWithFullData: IBankAccount = {
  id: 14798,
  name: 'apt',
  balance: 22636.18,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'regularly while',
  balance: 23673.2,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
