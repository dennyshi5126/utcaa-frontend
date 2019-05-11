export const USER_ID_COOKIE = 'IC_USER_ID';
export const EMAIL_COOKIE = 'IC_EM';
export const SESSION_ID_COOKIE = 'IC_S';

export function readCookie(name) {
  if (!name) return null;

  const nameEQ = name + '=';
  let cookies = document.cookie.split(';');
  for (let c of cookies) {
    c = c.trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function createCookie(name, value, days) {
  let expires = '';
  const dayInMs = 24 * 60 * 60 * 1000;

  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * dayInMs);
    expires = '; expires=' + date.toGMTString();
  }

  document.cookie = name + '=' + value + expires + '; path=/';
}

export function eraseCookie(name) {
  createCookie(name, '', -1);
}
