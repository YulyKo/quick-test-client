export enum Patterns {
  NAME_PATTERN = `[А-Я'ЇІЄ]{1}[а-я'їіє]{1,20} [А-Я'ЇІЄ]{1}[а-я'їіє]{1,20}'?-?[а-яА-Я'їіє'ЇІЄ]{1,20}`,
  PASSWORD_PATTERN = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}',
  EMAIL_PATTERN = '[^\s@]+@[^\s@]+',
}
// PASSWORD_PATTERN = '(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}',
// PASSWORD_PATTERN = '((?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,})',
// PASSWORD_PATTERN = '((?=.*[a-z]*)(?=.*[A-Z]*)(?=.*\d*).{3,})',

// ***
// PASSWORD_PATTERN_LOWERCASE_LETTERS = '((([a-z])|([а-я])).{1,})',
// PASSWORD_PATTERN_UPPERCASE_LETTERS = '((([A-Z])|([А-Я])).{1,})',
// PASSWORD_PATTERN_NUMBERS = '(\d.{1,})',
// ***

// PASSWORD_PATTERN = '[a-zA-Z 0-9_!@#$%*+]*', last work
// PASSWORD_PATTERN = '^([\w*+!@#$^]){8,}$',
// PASSWORD_PATTERN = '^[\w*+!@#$^]{8,}$',
// PASSWORD_PATTERN = '^(?=.*[a-z])(?=.*[A-Z]).{8,}$', - work
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$ - Andrew - DOES NOT WORK
// PASSWORD_PATTERN = '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$',
// PASSWORD_PATTERN = '^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)).{2,20}',
// PASSWORD_PATTERN = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*',
// ([A-Z]{1}[a-z']{1,20}\s[A-Z]{1}[a-z']{1,20}'?-?[a-zA-Z]{1,20})|([А-Я'ЇІЄ]{1}[а-я'їіє]{1,20}\s[А-Я'ЇІЄ]{1}[а-я'їіє]{1,20}'?-?[а-яА-Я'їіє'ЇІЄ]{1,20}) - with ENG
