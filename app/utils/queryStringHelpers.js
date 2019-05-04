import queryString from 'query-string';

export function getQueryParamValue(location, key) {
  return queryString.parse(location.search)[key];
}

export function getQueryParams(location) {
  return queryString.parse(location.search);
}
