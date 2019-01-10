export function dismissNotification(timestamp) {
  return { type: 'NOTIFICATION:DELETE', payload: { timestamp } }
}
