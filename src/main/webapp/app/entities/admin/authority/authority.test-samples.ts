import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '070b0d7f-0ce9-4cd7-987c-f611d3e66339',
};

export const sampleWithPartialData: IAuthority = {
  name: 'da0c05f6-6701-48e9-9b73-4cea6e07ad09',
};

export const sampleWithFullData: IAuthority = {
  name: 'aed05cc9-59da-46a0-9a92-f44c69d2756d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
