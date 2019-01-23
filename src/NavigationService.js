import { NavigationActions, DrawerActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function getCurrentRoute() {
  let route = _navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer());
}

function toggleDrawer() {
  _navigator.dispatch(DrawerActions.toggleDrawer());
}

export default {
  navigate,
  goBack,
  openDrawer,
  closeDrawer,
  toggleDrawer,
  getCurrentRoute,
  setTopLevelNavigator
};
