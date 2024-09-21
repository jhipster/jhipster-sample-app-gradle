import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 30717,
  label: 'pinion fooey short-term',
};

export const sampleWithPartialData: ILabel = {
  id: 17676,
  label: 'hard-to-find opposite',
};

export const sampleWithFullData: ILabel = {
  id: 22413,
  label: 'versus gadzooks jealous',
};

export const sampleWithNewData: NewLabel = {
  label: 'inhibit personal',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
