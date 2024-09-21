import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 24028,
  date: dayjs('2015-08-04T17:33'),
  amount: 27968.37,
};

export const sampleWithPartialData: IOperation = {
  id: 12979,
  date: dayjs('2015-08-05T11:12'),
  description: 'lest',
  amount: 9590.51,
};

export const sampleWithFullData: IOperation = {
  id: 32538,
  date: dayjs('2015-08-05T01:35'),
  description: 'accompanist ostrich mundane',
  amount: 3414.21,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T13:01'),
  amount: 30378.03,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
