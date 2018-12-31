import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AccountItem, utils } from 'ethereum-react-components'

export class AccountsPage extends Component {
  static displayName = 'AccountsPage'

  static propTypes = {
    accounts: PropTypes.array
  }

  static defaultProps = {}

  render() {
    const { accounts } = this.props

    const accountItems = accounts.map(account => {
      return (
        <AccountItem
          key={account.address}
          {...account}
          balance={utils.weiToEther(account.balance).toString()}
        />
      )
    })

    return (
      <StyledWrapper>
        <StyledHeader>
          <strong>Accounts</strong> Overview
        </StyledHeader>

        <StyledAccountsWrapper>{accountItems}</StyledAccountsWrapper>
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

const StyledAccountsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function mapStateToProps(state) {
  return {
    accounts: state.accounts.list
  }
}

export default connect(mapStateToProps)(AccountsPage)
