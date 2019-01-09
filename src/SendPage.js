import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AddressInput, Button, Input, utils } from 'ethereum-react-components'
import { submitTransaction } from './store/transaction/actions'

export class SendPage extends Component {
  static displayName = 'SendPage'

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      value: '',
      from: '',
      to: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch } = this.props
    const { to, from, value } = this.state

    const data = {
      to,
      from,
      value: utils.etherToWei(value)
    }
    dispatch(submitTransaction(data))
    this.setState({ amount: '' })
  }

  render() {
    const { from, to, value } = this.state

    return (
      <StyledWrapper>
        <StyledHeader>
          <strong>Send</strong> Funds
        </StyledHeader>

        <form onSubmit={this.handleSubmit}>
          <StyledField>
            <StyledLabel htmlFor="from">From</StyledLabel>
            <AddressInput
              name="from"
              value={from}
              onChange={value => this.setState({ from: value })}
            />
          </StyledField>

          <StyledField>
            <StyledLabel htmlFor="to">To</StyledLabel>
            <AddressInput
              name="to"
              value={to}
              onChange={value => this.setState({ to: value })}
            />
          </StyledField>

          <StyledField>
            <StyledLabel htmlFor="value">Value</StyledLabel>
            <Input
              name="value"
              placeholder="0.0"
              value={value}
              onChange={e => this.setState({ value: e.target.value })}
            />
          </StyledField>

          <Button disabled={!value} type="submit" style={{ marginTop: '24px' }}>
            Send
          </Button>
        </form>
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  padding: 20px 80px;
`

const StyledHeader = styled.div`
  font-size: 32px;
  font-weight: 100;
  color: #827a7a;
  margin: 20px 0;
`

const StyledLabel = styled.div`
  color: rgba(130, 122, 122, 0.7);
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 4px;
`

const StyledField = styled.div`
  margin: 16px 0;
`

export default connect()(SendPage)
