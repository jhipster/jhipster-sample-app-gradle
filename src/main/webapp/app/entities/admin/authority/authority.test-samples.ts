import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '021600f9-bfe5-4752-a322-3ca90c31cb4d',
};

export const sampleWithPartialData: IAuthority = {
  name: '3e3f813c-284e-419d-89e4-96b2fcd8ddd4',
};

export const sampleWithFullData: IAuthority = {
  name: '10ef811e-2f45-4eed-907b-c9d6fc8c8445',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
