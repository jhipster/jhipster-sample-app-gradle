import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 15509,
  date: dayjs('2015-08-05T06:16'),
  amount: 19300.25,
};

export const sampleWithPartialData: IOperation = {
  id: 14122,
  date: dayjs('2015-08-04T14:54'),
  amount: 16901.02,
};

export const sampleWithFullData: IOperation = {
  id: 20690,
  date: dayjs('2015-08-05T00:47'),
  description: 'cavernous kibitz woot',
  amount: 17694.7,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T11:56'),
  amount: 4681.81,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
