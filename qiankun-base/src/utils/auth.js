import * as cookie from "js-cookie";

/**
 *
 * @param name
 * @param value
 */
export function setToken(name, value) {
  cookie.set(name, value);
}

/**
 *
 * @param name
 */
export function getToken(name) {
  return cookie.get(name);
}

/**
 *
 * @param name
 */
export function removeToken(name) {
  cookie.remove(name);
}
