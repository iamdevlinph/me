export const types = {
  INIT: 'COMMON/INIT',
  INIT_SUCCESS: 'COMMON/INIT_SUCCESS',
  INIT_FAILED: 'COMMON/INIT_FAILED',
};

export const initialState = {
  init: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_SUCCESS:
      console.log('success init');
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const actions = {
  init: () => ({ type: types.INIT }),
};
