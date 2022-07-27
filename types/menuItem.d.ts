export interface MenuItemProps {
  label: string | null | undefined;
  href: string;
  Component: NextComponentType<NextPageContext, any, {}> & { layoutProps: any };
}
