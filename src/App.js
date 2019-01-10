import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AccountPage from './AccountPage'
import AccountsPage from './AccountsPage'
import Navbar from './Navbar'
import SendPage from './SendPage'
import Notifications from './Notifications'
import { fetchAccounts } from './store/accounts/actions'
import { fetchExchangeRate } from './store/exchangeRates/actions'
import { fetchBlockNumber, fetchPeerCount } from './store/network/actions'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchAccounts())
    dispatch(fetchExchangeRate())
    dispatch(fetchBlockNumber())

    this.peerCountInterval = setInterval(
      () => dispatch(fetchPeerCount()),
      10000
    )
  }

  componentWillUnmount() {
    clearInterval(this.peerCountInterval)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={AccountsPage} />
          <Route exact path="/send" component={SendPage} />
          <Route path="/accounts/:id" component={AccountPage} />

          <Notifications />
        </div>
      </Router>
    )
  }
}

export default connect()(App)
