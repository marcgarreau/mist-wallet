const initialState = {
  resolved: false,
  error: null,
  loading: false
}

export default function network(state = initialState, action) {
  switch (action.type) {
    case 'NEW_TRANSACTION:START':
      return { ...state, loading: true, error: null }
    case 'NEW_TRANSACTION:SUCCESS':
      return { ...state, loading: false }
    case 'NEW_TRANSACTION:ERROR':
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
