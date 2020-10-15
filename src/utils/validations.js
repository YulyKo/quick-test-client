const validEmail = (email) => {
  const strongRegex = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$');
  return strongRegex.test(email);
};

module.exports = { validEmail };
