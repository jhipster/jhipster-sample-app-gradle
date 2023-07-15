import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 23327,
  date: dayjs('2015-08-04T19:16'),
  amount: 23603,
};

export const sampleWithPartialData: IOperation = {
  id: 19857,
  date: dayjs('2015-08-05T02:35'),
  amount: 18284,
};

export const sampleWithFullData: IOperation = {
  id: 9569,
  date: dayjs('2015-08-05T08:46'),
  description: 'digital Hybrid Intelligent',
  amount: 5668,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T03:20'),
  amount: 7865,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
