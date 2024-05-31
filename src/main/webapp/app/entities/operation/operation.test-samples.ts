import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 24148,
  date: dayjs('2015-08-04T22:18'),
  amount: 14014.1,
};

export const sampleWithPartialData: IOperation = {
  id: 9569,
  date: dayjs('2015-08-05T08:46'),
  amount: 24028.19,
};

export const sampleWithFullData: IOperation = {
  id: 15797,
  date: dayjs('2015-08-05T08:08'),
  description: 'whoever scotch lest',
  amount: 5509.39,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T23:54'),
  amount: 30280.69,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
