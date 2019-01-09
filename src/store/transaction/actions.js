import web3 from '../../web3'

export function submitTransaction(data) {
  return async dispatch => {
    dispatch({
      type: 'NEW_TRANSACTION:START',
      payload: { data }
    })

    try {
      web3.eth
        .sendTransaction(data)
        .on('transactionHash', txHash => {
          console.log('∆∆∆ txHash', txHash)

          dispatch({
            type: 'NEW_TRANSACTION:SUCCESS',
            payload: { txHash }
          })
        })
        .on('receipt', receipt => {
          console.log('∆∆∆ receipt', receipt)
        })
        .on('confirmation', number => {
          console.log('∆∆∆ number', number)
        })
    } catch (e) {
      console.log('∆∆∆ e sendTransaction', e)

      dispatch({
        type: 'NEW_TRANSACTION:ERROR',
        error: e.toString()
      })
    }
  }
}
