const API_URL = 'https://quick-test-api.herokuapp.com';
const REGISTRATION_URL = `${API_URL}/api/v1/auth/registration`;
const LOGIN_URL = `${API_URL}/api/v1/auth/login`;
const REFRESH_TOKEN_URL = `${API_URL}/token`;
const CHECK_EMAIL_URL = `${API_URL}/api/v1/auth/email`;

export default {
  REGISTRATION_URL,
  LOGIN_URL,
  REFRESH_TOKEN_URL,
  CHECK_EMAIL_URL,
};
