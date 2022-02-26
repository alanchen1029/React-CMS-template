export const ROOT_ROUTE = "/";
export const LOGIN_ROUTE = "/login";

export const DEMO_LIST1_ROUTE = "/list-1";
export const DEMO_LIST1_ITEM_EDIT_ROUTE = "/list-1/edit/:id";

export const getDemoListItemEditRoute = (demoItemID: string) => {
  return `/list-1/edit/${demoItemID}`;
}