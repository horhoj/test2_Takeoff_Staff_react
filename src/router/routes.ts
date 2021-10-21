import { SignIn } from '../pages/SignIn';
import { ContactList } from '../pages/ContactList';
import { Contact } from '../pages/Contact';
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
    path: '/contacts',
    exact: true,
    private: true,
    always: false,
    component: ContactList,
  },
  {
    name: 'contact',
    path: '/contacts/:id',
    exact: true,
    private: true,
    always: false,
    component: Contact,
  },
];
