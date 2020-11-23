const initialState = {
  pros: [
    { value: `It's a tasty`, id: 'a1' },
    { value: `It's a tasty`, id: 'a2' },
    { value: `It's a tasty`, id: 'a3' },
    { value: '', id: 'addNew' },
  ],
  cons: [
    { value: 'Makes me fat', id: 'b1' },
    { value: 'Too expensive', id: 'b2' },
    { value: '', id: 'addNew' },
  ],
};

const reducer = function (state = initialState, actions) {
  if (!actions.payload) actions.payload = {};
  const { type, id, value } = actions.payload;
  switch (actions.type) {
    case 'ADD':
      const { length } = state[type];
      const newArray = [
        ...[...state[type]].slice(0, length - 1),
        { value, id },
        { value: '', id: 'addNew' },
      ];
      return {
        ...state,
        [type]: newArray,
      };
    case 'CHANGE':
      const change = [...state[type]].map(
        ({ value: changeValue, id: changeId }) => {
          if (id === changeId) {
            return { value, id: changeId };
          }
          return { value: changeValue, id: changeId };
        }
      );

      return {
        ...state,
        [type]: change,
      };
    case 'REMOVE':
      const aaa = state[type].filter(({ id: removeId }) => id !== removeId);
      return {
        ...state,
        [type]: aaa,
      };
    default:
      return state;
  }
};

export default reducer;
