import { Server } from 'socket.io';
import OrderService from './orderService';
import { OrderStatus } from '../models/Order';
import { SOCKET_EVENTS } from '../../../constants/socketEvents';

class OrderStatusService {
  private static io: Server | null = null;

  /**
   * Set Socket.io server instance
   */
  static setSocketServer(io: Server): void {
    this.io = io;
  }

  /**
   * Start automatic order status simulation
   */
  static async startOrderStatusSimulation(orderId: string): Promise<void> {
    const statusProgression: Array<{ status: OrderStatus; delay: number }> = [
      { status: 'Preparing', delay: 5000 },
      { status: 'Out for Delivery', delay: 10000 },
      { status: 'Delivered', delay: 15000 }
    ];

    for (const { status, delay } of statusProgression) {
      setTimeout(async () => {
        const updatedOrder = await OrderService.updateOrderStatus(orderId, status);
        
        if (updatedOrder && this.io) {
          this.io.to(orderId).emit(SOCKET_EVENTS.ORDER_STATUS_UPDATED, updatedOrder);
        }
      }, delay);
    }
  }
}

export default OrderStatusService;
