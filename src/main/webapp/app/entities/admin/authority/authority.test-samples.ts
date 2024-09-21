import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '010fbe72-23a0-43c4-99ef-1c8e99462c8d',
};

export const sampleWithPartialData: IAuthority = {
  name: '1e8124ed-7cdf-4884-a545-1272ca9329ac',
};

export const sampleWithFullData: IAuthority = {
  name: 'c1785109-3e35-4b6e-84f3-950c2bea8262',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
