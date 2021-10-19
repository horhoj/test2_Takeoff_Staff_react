export type RouterPathNames = 'contactList' | 'signIn';

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
