const showModalWindow = (state) => {
  state.modalWindowState = true;
};

const hideModalWindow = (state) => {
  state.modalWindowState = false;
};

module.exports = {
  showModalWindow,
  hideModalWindow,
};
