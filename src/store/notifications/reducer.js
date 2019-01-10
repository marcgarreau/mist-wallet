const initialState = {
  list: []
}

export default function notifications(state = initialState, action) {
  switch (action.type) {
    case 'NEW_TRANSACTION:ERROR':
    case 'NOTIFICATION:CREATE':
      return {
        list: state.list.concat({
          message: action.error,
          timestamp: Date.now()
        })
      }
    case 'NOTIFICATION:DELETE':
      return {
        list: state.list.filter(notification => {
          return notification.timestamp !== action.payload.timestamp
        })
      }
    default:
      return state
  }
}
