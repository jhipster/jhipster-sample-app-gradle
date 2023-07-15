import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 71191,
  date: dayjs('2015-08-04T19:16'),
  amount: 72031,
};

export const sampleWithPartialData: IOperation = {
  id: 60600,
  date: dayjs('2015-08-05T02:35'),
  description: 'Lanthanum Jewelery',
  amount: 85355,
};

export const sampleWithFullData: IOperation = {
  id: 20663,
  date: dayjs('2015-08-05T08:06'),
  description: 'core',
  amount: 93201,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T15:23'),
  amount: 32018,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
