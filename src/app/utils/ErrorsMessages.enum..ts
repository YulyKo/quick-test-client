export enum ErrorsMessages {
  // common
  ERROR_MESSAGE_FOR_REQUIRED_FIELD = 'Обов\'язкове поле',
  ERROR_MESSAGE_FOR_SO_LONG_NAME = 'Ім\'я надто довге',
  // mentor
  ERROR_MESSAGE_FOR_INVALID_MENTOR_NAME = 'І\'мя було веддено не коректно',
  ERROR_MESSAGE_FOR_SO_SHORT_MENTOR_NAME = 'Мінімальна довжина 3 символи',
  ERROR_MESSAGE_FOR_SO_LONG_MENTOR_NAME = 'Максимальна довжина 20 символів',
  // email
  ERROR_MESSAGE_FOR_INVALID_EMAIL = 'Пошта введена не коректно',
  ERROR_MESSAGE_FOR_EXISTED_EMAIL = 'Аккаунт із такою поштою існує',
  ERROR_MESSAGE_FOR_NOT_EXISTED_EMAIL = 'Аккаунта із такою поштою НЕ існує',
  // password
  ERROR_MASSAGE_FOR_INVALID_PASSWORD = 'Пароль має містити влику літеру, малу літеру та цифру',
  ERROR_MESSAGE_FOR_SO_SHOT_PASSWORD = 'Мінімальна довжина 8 символів',
  ERROR_MESSAGE_FOR_SO_LONG_PASSWORD = 'Максимальна довжина 20 символів',
  ERROR_MASSAGE_FOR_NO_EQUALS_PASSWORDS = 'Паролі не однакові',
  // else
  ERROR_MESSAGE_FOR_LOGIN_FORM = 'Невірні дані',
  // question | shot name message common for answer and question
  ERROR_MESSAGE_FOR_SO_SHORT_QUESTION_NAME = 'Мінімальна довжина 2 символи',
  ERROR_MESSAGE_FOR_SO_LONG_QUESTION_NAME = 'Максимальна довжина 20 символів',
  ERROR_MESSAGE_FOR_SO_LONG_QUESTION_TEXT = 'Максимальна довжина 200 символів',
  ERROR_MASSAGE_FOR_INVALID_QUESTION = 'Присутні недопустимі символи',
  // answer
  ERROR_MESSAGE_FOR_SO_LONG_ANSWER_TEXT = 'Максимальна довжина 40 символів',
  // folder
  ERROR_MESSAGE_FOR_INVALID_FOLDER = 'Заборонені символи: @ / | \ * ~ < > ',
  ERROR_MESSAGE_FOR_SO_SHORT_FOLDER_NAME = 'Мінімальна довжина 2 символи',
  ERROR_MESSAGE_FOR_SO_LONG_FOLDER_NAME = 'Максимальна довжина 40 символів',
  // test
  ERROR_MESSAGE_FOR_INVALID_TEST = 'Заборонені символи: @ / | \ * ~ < > ',
  ERROR_MESSAGE_FOR_SO_SHORT_TEST_NAME = 'Мінімальна довжина 2 символи',
  ERROR_MESSAGE_FOR_SO_LONG_TEST_NAME = 'Максимальна довжина 20 символів',
  ERROR_MESSAGE_FOR_SO_LONG_TEST_TEXT = 'Максимальна довжина 200 символів',
}
