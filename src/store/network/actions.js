import web3 from '../../web3'

export function fetchBlockNumber() {
  return dispatch => {
    web3.eth.subscribe('newBlockHeaders', (err, block) => {
      if (err) {
        console.log('∆∆∆ newBlockHeaders err', err)
        return
      }

      dispatch({
        type: 'NEW_BLOCK:SUCCESS',
        payload: {
          blockNumber: block.number,
          timestamp: block.timestamp
        }
      })
    })
  }
}

export function fetchPeerCount() {
  return async dispatch => {
    const peers = await web3.eth.net.getPeerCount()

    dispatch({
      type: 'PEER_COUNT:SUCCESS',
      payload: { peers }
    })
  }
}
