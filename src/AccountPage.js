import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AccountPage extends Component {
  static displayName = 'AccountPage'

  static propTypes = {
    id: PropTypes.string
  }

  static defaultProps = {}

  render() {
    return <div>Account: {this.props.id}</div>
  }
}
