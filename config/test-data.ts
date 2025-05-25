import { Credentials } from '../types/Credentials';

export const validCredentials: Credentials = {
  username: 'standard_user',
  password: 'secret_sauce',
  firstname: '',
  lastname: '',
  zipcode: ''
};

export const invalidCredentials: Credentials = {
  username: 'invaliduser',
  password: 'wrongpassword',
  firstname: '',
  lastname: '',
  zipcode: ''
};

export const yourInformation: Credentials = {
  firstname: 'Automation',
  lastname: 'Test',
  zipcode: '1686',
  username: '',
  password: ''
};