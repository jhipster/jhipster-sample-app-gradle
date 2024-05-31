import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 24516,
  login: 'g@1daOh\\mtb',
};

export const sampleWithPartialData: IUser = {
  id: 7982,
  login: '={@rUsp\\JzRD\\m43\\Iynv',
};

export const sampleWithFullData: IUser = {
  id: 2357,
  login: 'v@FF\\bF\\|CNUCAM',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
