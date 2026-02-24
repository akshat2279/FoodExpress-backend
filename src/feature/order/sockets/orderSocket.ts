import { Server, Socket } from 'socket.io';
import OrderStatusService from '../services/orderStatusService';
import OrderService from '../services/orderService';
import { SOCKET_EVENTS } from '../../../constants/socketEvents';

/**
 * Setup Socket.io for real-time order updates
 */
export const setupOrderSocket = (io: Server): void => {
  OrderStatusService.setSocketServer(io);

  io.on(SOCKET_EVENTS.CONNECTION, (socket: Socket) => {
    console.log('Client connected:', socket.id);

    /**
     * Join order room for real-time updates
     */
    socket.on(SOCKET_EVENTS.JOIN_ORDER, async (orderId: string) => {
      try {
        if (!orderId || typeof orderId !== 'string') {
          socket.emit(SOCKET_EVENTS.ERROR, { message: 'Invalid order ID' });
          return;
        }

        // Verify order exists before allowing join
        const orderResponse = await OrderService.getOrderById(orderId);
        if (!orderResponse.success) {
          socket.emit(SOCKET_EVENTS.ERROR, { message: 'Order not found' });
          return;
        }

        socket.join(orderId);
        console.log(`Client ${socket.id} joined order room: ${orderId}`);
        
        // Send current order status immediately upon joining
        socket.emit(SOCKET_EVENTS.ORDER_STATUS_UPDATED, orderResponse.data);
      } catch (error) {
        console.error('Error joining order room:', error);
        socket.emit(SOCKET_EVENTS.ERROR, { message: 'Failed to join order room' });
      }
    });

    /**
     * Leave order room
     */
    socket.on(SOCKET_EVENTS.LEAVE_ORDER, (orderId: string) => {
      try {
        if (!orderId || typeof orderId !== 'string') {
          socket.emit(SOCKET_EVENTS.ERROR, { message: 'Invalid order ID' });
          return;
        }

        socket.leave(orderId);
        console.log(`Client ${socket.id} left order room: ${orderId}`);
      } catch (error) {
        console.error('Error leaving order room:', error);
        socket.emit(SOCKET_EVENTS.ERROR, { message: 'Failed to leave order room' });
      }
    });

    /**
     * Handle disconnection
     */
    socket.on(SOCKET_EVENTS.DISCONNECT, () => {
      console.log('Client disconnected:', socket.id);
    });

    /**
     * Handle errors
     */
    socket.on('error', (error: Error) => {
      console.error('Socket error:', error);
    });
  });
};
