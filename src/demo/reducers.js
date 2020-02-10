export const errorRed = (state, action) => {
  switch (action.type) {
  case 'SET_ERROR_MSG':
    return { ...state, showError: action.showError, error: action.error };
  default:
    return state;
  }
};

export const fHandlerRed = (state, action) => {
  switch (action.type) {
  case 'STACK_FILES':
    return { ...state, fileList: state.fileList.concat(action.files) };
  default:
    return state;
  }
};
