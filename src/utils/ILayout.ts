export interface NavigationLink {
  id: number;
  value: string;
  type: string;
  path?: string;
  subMenu?: Array<SubMenu>;
}

export interface SubMenu {
  id: number;
  value: string;
  type: string;
  path: string;
  subMenu?: Array<NavigationLink>;
}
