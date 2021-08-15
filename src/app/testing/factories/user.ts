import { User } from '../../domain/user';

export const createMockUser = (params: Partial<User>): User => {
  const defaultUser = {
    id: 1,
    name: 'name 1',
    username: 'user name 1',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: { name: '', catchPhrase: '', bs: '' },
  };

  return { ...defaultUser, ...params };
};
