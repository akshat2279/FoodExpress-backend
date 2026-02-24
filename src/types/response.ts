export interface ResponseObject<T = any> {
  data?: T;
  message: string;
  success: boolean;
  code?: number;
}
