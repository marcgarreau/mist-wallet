const initialState = {
  peers: 0,
  blockNumber: 0,
  blockTimestamp: 0
}

export default function network(state = initialState, action) {
  switch (action.type) {
    case 'PEER_COUNT:SUCCESS':
      return { ...state, peers: action.payload.peers }
    case 'NEW_BLOCK:SUCCESS':
      return {
        ...state,
        blockNumber: action.payload.blockNumber,
        blockTimestamp: action.payload.timestamp
      }
    default:
      return state
  }
}
