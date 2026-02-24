export type OrderStatus = 'Order Received' | 'Preparing' | 'Out for Delivery' | 'Delivered';

export interface OrderItem {
  menuItemId: string;
  quantity: number;
  name: string;
  price: number;
}

export interface Customer {
  name: string;
  address: string;
  phone: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  customer: Customer;
  total: number;
  status: OrderStatus;
  createdAt: Date;
}
