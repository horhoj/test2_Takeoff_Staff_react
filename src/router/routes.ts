import { SignIn } from '../pages/SignIn';
import { ContactList } from '../pages/ContactList';
import { RouteItem } from './types';

export const routes: RouteItem[] = [
  {
    name: 'signIn',
    path: '/sign-in',
    exact: true,
    private: false,
    always: false,
    component: SignIn,
  },
  {
    name: 'contactList',
    path: '/contact-list',
    exact: true,
    private: true,
    always: false,
    component: ContactList,
  },
];
