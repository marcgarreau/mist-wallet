import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Notification } from 'ethereum-react-components'
import { dismissNotification } from './store/notifications/actions'

export class Notifications extends Component {
  static displayName = 'Notifications'

  static propTypes = {
    notifications: PropTypes.array
  }

  static defaultProps = {}

  handleDismissNotification = timestamp => {
    const { dispatch } = this.props

    dispatch(dismissNotification(timestamp))
  }

  render() {
    const { notifications } = this.props

    if (!notifications.length) {
      return null
    }

    const notificationsComponents = notifications.map((notification, index) => {
      return (
        <Notification
          key={notification.timestamp}
          dismiss={() => {
            this.handleDismissNotification(notification.timestamp)
          }}
          {...notification}
        />
      )
    })

    return <StyledWrapper>{notificationsComponents}</StyledWrapper>
  }
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`

function mapStateToProps(state) {
  return {
    notifications: state.notifications.list
  }
}

export default connect(mapStateToProps)(Notifications)
