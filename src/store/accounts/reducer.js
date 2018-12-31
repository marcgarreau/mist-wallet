const initialState = {
  list: []
}

export default function accounts(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS:SUCCESS':
      return { ...state, list: action.payload.accounts }
    default:
      return state
  }
}
