import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 9417,
  label: 'Northwest Southwest Shoes',
};

export const sampleWithPartialData: ILabel = {
  id: 2445,
  label: 'Usability',
};

export const sampleWithFullData: ILabel = {
  id: 1959,
  label: 'Functionality lavender Northeast',
};

export const sampleWithNewData: NewLabel = {
  label: 'viral Southwest override',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
