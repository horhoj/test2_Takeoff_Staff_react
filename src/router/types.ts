export type RouterPathNames = 'contactList' | 'contact' | 'signIn' | 'page404';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  always: boolean;
  component: any;
}

export interface RouteParams {
  [keys: string]: string | number;
}
