function validEmail(email) {
  let isValid = false;
  const req = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$';
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
  const regLowerCaseUppercaseNumber = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$');
  if (regLowerCaseUppercaseNumber.test(password)) {
    isValid = true;
  } else if (password === '' || !password) {
    isValid = false;
  }
  return isValid;
}

function validName(name) {
  let isValid = false;
  const regName = new RegExp('^([А-Я]{1}[а-я]{1,23}|[A-Z]{1}[a-z]{1,23})$');
  if (regName.test(name)) {
    isValid = true;
  } else if (name === '' || !name) {
    isValid = false;
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
  validName,
  setMessage,
  cleanErrorArray,
};
