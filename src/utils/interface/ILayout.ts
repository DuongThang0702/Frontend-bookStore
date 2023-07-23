export interface NavigationLink {
  icon?: JSX.Element;
  id: number;
  value: string;
  type: string;
  path?: string;
  subMenu?: Array<SubMenu>;
}

export interface SubMenu {
  icon?: JSX.Element;
  id: number;
  value: string;
  type: string;
  path: string;
  subMenu?: Array<NavigationLink>;
}
