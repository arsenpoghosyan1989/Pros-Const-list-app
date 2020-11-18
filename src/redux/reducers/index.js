const initialState = {
  cons: [`It's really tasty`, `It's really tasty`, `It's really tasty`, `It's really tasty`, `It's really tasty`, ''],
  pros: ['Makes me fat', 'Too expensive', ''],
};

const reducer = function (state = initialState, actions) {
  if (!actions.payload) actions.payload = {};
  const { type, id, value } = actions.payload;

  switch (actions.type) {
    case 'CHANGE':
      const change = [...state[type]];
      change[id] = value;
      if (value === '') {
        return {
          ...state,
          [type]: [...change.slice(0, id), ...change.slice(id + 1)],
        };
      }
      if (id + 1  === state[type].length) {
        return {
          ...state,
          [type]: [...state[type].slice(0, id), value, '']
        };
      }
      return {
        ...state,
        [type]: change,
      };
    default:
      return state;
  }
};

export default reducer;
