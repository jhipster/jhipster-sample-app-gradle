import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 5572,
  name: 'inasmuch',
  balance: 5654.51,
};

export const sampleWithPartialData: IBankAccount = {
  id: 5948,
  name: 'fooey feel',
  balance: 13411.64,
};

export const sampleWithFullData: IBankAccount = {
  id: 32625,
  name: 'finally generally',
  balance: 4585.07,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'tightly',
  balance: 11252.18,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
