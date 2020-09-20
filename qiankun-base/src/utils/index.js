const Layout = () => import("../components/Layout/index");

let routerMap = [];
/**
 *
 * @param route
 * @param options
 */
export function fnc(route, options = {}) {
  route.forEach((element, index) => {
    if (element.children) {
      fnc(element.children, routerMap[index]);
      return;
    }
    options.children.push({
      path: element.path,
      name: element.key,
      component: { render: (h) => h("span") },
      meta: {
        type: element.type,
      },
    });
  });
}

/**
 *
 * @param route
 */
export function routerList(route) {
  routerMap = [];
  route.forEach((element) => {
    routerMap.push({
      path: element.path,
      name: element.key,
      component: Layout,
      meta: {
        type: element.type,
      },
      children: [],
    });
  });
  fnc(route);
  return routerMap;
}
