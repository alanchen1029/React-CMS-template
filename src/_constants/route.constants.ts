export const ROOT_ROUTE = "/";
export const LOGIN_ROUTE = "/login";
export const DEMO_LIST1_ROUTE = "/list-1";
export const DEMO_LIST1_ITEM_EDIT_ROUTE = "/list-1/edit/:id";
export const DEMO_INPUT_VARIANTS_ROUTE = "/input-variants";
export const DEMO_CHARTS_ROUTE = "/charts";

export const getDemoListItemEditRoute = (demoItemID: string) => {
  return `/list-1/edit/${demoItemID}`;
}