export const SOCKET_EVENTS = {
  // Connection events
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',
  
  // Order events
  JOIN_ORDER: 'joinOrder',
  LEAVE_ORDER: 'leaveOrder',
  ORDER_STATUS_UPDATED: 'orderStatusUpdated',
  
  // Error events
  ERROR: 'error',
} as const;
