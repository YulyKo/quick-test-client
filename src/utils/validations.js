function validEmail(email) {
  let isValid = false;
  const req = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  const strongRegex = new RegExp(req);
  if (strongRegex.test(email)) {
    isValid = true;
  } else if (email === '' || !email) {
    isValid = false;
  }
  return isValid;
}

function validPassword(password) {
  let isValid = false;
  const regLowerCaseUppercaseNumber = new RegExp('^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*|(?=.*\\d)(?=.*[а-я])(?=.*[А-Я])(?!.*\\s).*)$');
  if (regLowerCaseUppercaseNumber.test(password)) {
    isValid = true;
  } else if (password === '' || !password) {
    isValid = false;
  }
  return isValid;
}

function validTeacherName(name) {
  let isValid = false;
  const regName = new RegExp('^([А-Я]{1}[а-я]{1,23}|[A-Z]{1}[a-z]{1,23})$');
  if (regName.test(name)) {
    isValid = true;
  } else if (name === '' || !name) {
    isValid = false;
  }
  return isValid;
}

function validName(name) {
  let isValid = false;
  const regName = new RegExp('^([а-яА-Я]{1,23}|[a-zA-Z]{1,23})$');
  if (regName.test(name)) {
    isValid = true;
  }
  return isValid;
}

function cleanErrorArray(array, message) {
  const index = array.indexOf(message);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function setMessage(array, message, isValid) {
  cleanErrorArray(array, message);
  if (isValid === false) {
    array.push(message);
  } else {
    cleanErrorArray(array, message);
  }
  return array;
}

module.exports = {
  validEmail,
  validPassword,
  validTeacherName,
  validName,
  setMessage,
  cleanErrorArray,
};
