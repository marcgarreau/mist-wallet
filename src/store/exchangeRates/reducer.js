const initialState = {
  USD: '0',
  BRL: '0',
  EUR: '0',
  GBP: '0',
  BTC: '0'
}

export default function exchangeRates(state = initialState, action) {
  switch (action.type) {
    case 'EXCHANGE_RATES:SUCCESS':
      return { ...state, ...action.payload.exchangeRates }
    default:
      return state
  }
}
