import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 23327,
  date: dayjs('2015-08-04T19:16'),
  amount: 23602.43,
};

export const sampleWithPartialData: IOperation = {
  id: 19857,
  date: dayjs('2015-08-05T02:35'),
  amount: 18283.83,
};

export const sampleWithFullData: IOperation = {
  id: 9569,
  date: dayjs('2015-08-05T08:46'),
  description: 'anti near but',
  amount: 19739.78,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T04:33'),
  amount: 13339.59,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
