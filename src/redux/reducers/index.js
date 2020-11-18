const initialState = {
  cons: ['aaa', 'bbb', 'ccc'],
  pros: ['ddd', 'eee', 'fff'],
};


const reducer = function (state = initialState, actions) {

  switch (actions.type) {
    case "CHANGE":
      const {type, id, value} = actions.payload;
      const change = [...state[type], state[type][id] = value];
      console.log(change)
      return {
        ...state,
        [type]: change,
      };
    case "ITEM_DECRESS":
      let decItems = state.items.map(item => {
        if (item.id === actions.payload) {
          const count = item.count + 1;
          return {
            ...item,
            count: count
          }
        };
        return item;
      })
      return {
        ...state,
        items: decItems,
      };
    case "ITEM_INCRESS":
      let incItems = state.items.map(item => {
        if (item.id === actions.payload) {
          let count = 0
          if (item.count > 0) {
            count = item.count - 1;
          };
          return {
            ...item,
            count
          }
        };
        return item;
      })
      return {
        ...state,
        items: incItems,
      };
    case "ITEM_DELETE":
      let delItems = state.items.filter(item => {
        if (item.id === actions.payload) {
          return false
        };
        return true;
      })
      return {
        ...state,
        items: delItems,
      };
    default:
      return state;
  };
};

export default reducer;