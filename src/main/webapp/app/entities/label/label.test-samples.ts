import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 9417,
  label: 'how beard catastrophe',
};

export const sampleWithPartialData: ILabel = {
  id: 29033,
  label: 'fooey plus',
};

export const sampleWithFullData: ILabel = {
  id: 16725,
  label: 'mantel',
};

export const sampleWithNewData: NewLabel = {
  label: 'asX',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
