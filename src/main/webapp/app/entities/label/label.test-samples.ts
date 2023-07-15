import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 28739,
  label: 'Buckinghamshire Southeast Soft',
};

export const sampleWithPartialData: ILabel = {
  id: 26484,
  label: 'blah Borders',
};

export const sampleWithFullData: ILabel = {
  id: 96746,
  label: 'penalise',
};

export const sampleWithNewData: NewLabel = {
  label: 'lavender',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
