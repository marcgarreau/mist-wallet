import moment from 'moment'

export function fetchExchangeRate() {
  return async dispatch => {
    dispatch({ type: 'EXCHANGE_RATES:START' })

    try {
      const url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=BTC,USD,EUR,GBP,BRL&ts=${moment().unix()}`
      const response = await fetch(url)
      const rates = await response.json()

      dispatch({
        type: 'EXCHANGE_RATES:SUCCESS',
        payload: { exchangeRates: rates.ETH }
      })
    } catch (e) {
      dispatch({ type: 'EXCHANGE_RATES:FAILURE', error: e.toString() })
    }
  }
}
