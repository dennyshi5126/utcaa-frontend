import { readCookie, USER_ID_COOKIE, EMAIL_COOKIE, SESSION_ID_COOKIE } from 'utils/cookieHelpers';

export function getSessionValues() {
  let email = readCookie(EMAIL_COOKIE);
  return {
    userId: readCookie(USER_ID_COOKIE) || '',
    sessionId: readCookie(SESSION_ID_COOKIE) || '',
    email: email === null ? '' : email.replace('%40', '@'),
  };
}
