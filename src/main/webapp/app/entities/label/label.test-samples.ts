import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 23947,
  label: 'even second pot',
};

export const sampleWithPartialData: ILabel = {
  id: 29508,
  label: 'toga ack drat',
};

export const sampleWithFullData: ILabel = {
  id: 6659,
  label: 'alert adjudge and',
};

export const sampleWithNewData: NewLabel = {
  label: 'separately expiate',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
