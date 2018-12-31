import web3 from '../../web3'

export function fetchAccounts() {
  return async dispatch => {
    try {
      await window.ethereum.enable()

      const addresses = await web3.eth.getAccounts()

      const accounts = await Promise.all(
        addresses.map(async (address, index) => {
          const balance = await web3.eth.getBalance(address)

          // TODO: account names
          return { address, balance, name: `Account ${index + 1}` }
        })
      )

      dispatch({ type: 'FETCH_ACCOUNTS:SUCCESS', payload: { accounts } })
    } catch (e) {
      console.log('∆∆∆ fetchAccounts error', e)
    }
  }
}
