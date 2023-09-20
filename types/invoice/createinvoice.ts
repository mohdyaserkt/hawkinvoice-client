export interface IItem {
  quantity: number;
  rate: number;
  itemName: string;
  id: string;
  [key: string]: string | number;
  // Add an index signature for dynamic keys
}

export interface IInvoice {
  id?: string;
  customerName: string;
  customerEmail: string;
  invoiceNumber: string;
  customerId: string;
  orderNumber?: string;
  invoiceDate: Date;
  dueDate: Date;
  salesPerson?: string;
  subject?: string;
  itemDetails: any[]; // You can define a more specific type for itemDetails
  subTotal: number;
  discount?: number;
  Adjustment?: object;
  Total: number;
  customerNotes?: string;
  termsAndConditions?: string;
  status?: string;
  paymentMode?: string;
}

export interface handleCreateInvoice {
  invoice: {
    id?: string;
    customerName: string;
    customerEmail: string;
    invoiceNumber: string;
    customerId: string;
    orderNumber?: string;
    invoiceDate: Date;
    dueDate: Date;
    salesPerson?: string;
    subject?: string;
    itemDetails: any[]; // You can define a more specific type for itemDetails
    subTotal: number;
    discount?: number;
    Adjustment?: object;
    Total: number;
    customerNotes?: string;
    termsAndConditions?: string;
    status?: string;
    paymentMode?: string;
  };

  setError?: (field: string, errors: string[]) => void;
}
