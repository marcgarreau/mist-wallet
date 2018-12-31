import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NavbarItem, NetworkStatus } from 'ethereum-react-components'

export class Navbar extends Component {
  static displayName = 'Navbar'

  static propTypes = {
    peers: PropTypes.number
  }

  static defaultProps = {}

  render() {
    const { blockNumber, peers, timestamp } = this.props

    return (
      <StyledWrapper>
        <StyledLink to="/">
          <NavbarItem title="wallets" icon="faWallet" />
        </StyledLink>
        <StyledLink to="/send">
          <NavbarItem title="send" icon="faArrowCircleUp" />
        </StyledLink>
        <NetworkStatus
          blockNumber={blockNumber}
          peers={peers}
          timestamp={timestamp}
        />
      </StyledWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    peers: state.network.peers,
    blockNumber: state.network.blockNumber,
    timestamp: state.network.blockTimestamp
  }
}

export default connect(mapStateToProps)(Navbar)

const StyledWrapper = styled.div`
  display: flex;
  background-color: #f0f0f0;
  background-image: linear-gradient(to bottom, #f0f0f0 50%, #ddd9d9 90%);
  padding: 0 80px;
  height: 80px;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  flex: 0 1 auto;
  text-decoration: none;
`
