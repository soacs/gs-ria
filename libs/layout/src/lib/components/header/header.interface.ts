/* eslint-disable @typescript-eslint/naming-convention */
export interface HeaderConfig {
  title: string;
  brand: string;
  menu_items: MenuItems[];
  logo: { url: string };
}
interface MenuItems {
  menu_item: {
    text: string;
    route: string;
    icon?: string;
  };
}
