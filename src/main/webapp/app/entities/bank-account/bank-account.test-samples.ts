import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 5572,
  name: 'Electronic',
  balance: 5588,
};

export const sampleWithPartialData: IBankAccount = {
  id: 2469,
  name: 'Concrete Games',
  balance: 13761,
};

export const sampleWithFullData: IBankAccount = {
  id: 23543,
  name: 'than',
  balance: 4481,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Handcrafted Arizona value',
  balance: 11100,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
