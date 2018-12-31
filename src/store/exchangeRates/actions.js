import moment from 'moment'

export function fetchExchangeRate() {
  return async dispatch => {
    try {
      const url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=BTC,USD,EUR,GBP,BRL&ts=${moment().unix()}`
      const response = await fetch(url)
      const rates = await response.json()

      dispatch({
        type: 'EXCHANGE_RATES:FETCH',
        payload: { exchangeRates: rates.ETH }
      })
    } catch (e) {
      console.log('∆∆∆ fetchExchangeRate', e)
    }
  }
}
