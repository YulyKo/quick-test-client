const API_URL = 'https://quick-test-api.herokuapp.com';
const REGISTRATION_URL = `${API_URL}/api/v1/auth/registration`;
const LOGIN_URL = `${API_URL}/api/v1/auth/login`;
const REFRESH_TOKEN_URL = `${API_URL}/token`;
const CHECK_EMAIL_URL = `${API_URL}/api/v1/auth/email`;

const ERROR_MESSAGE_FOR_INVALID_NAME = 'І\'мя було веддено не коректно';
const ERROR_MESSAGE_FOR_INVALID_EMAIL = 'Пошта введена не коректно';
const ERROR_MESSAGE_FOR_EXISTED_EMAIL = 'Аккаунт із такою поштою існує';
const ERROR_MASSAGE_FOR_INVALID_PASSWORD = 'Пароль має містити дещо більше';
const ERROR_MASSAGE_FOR_NO_EQUALS_PASSWORDS = 'Паролі не однакові';

module.exports = {
  REGISTRATION_URL,
  LOGIN_URL,
  REFRESH_TOKEN_URL,
  CHECK_EMAIL_URL,
  ERROR_MESSAGE_FOR_INVALID_NAME,
  ERROR_MESSAGE_FOR_INVALID_EMAIL,
  ERROR_MESSAGE_FOR_EXISTED_EMAIL,
  ERROR_MASSAGE_FOR_INVALID_PASSWORD,
  ERROR_MASSAGE_FOR_NO_EQUALS_PASSWORDS,
};
