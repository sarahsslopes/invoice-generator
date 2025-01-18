export interface Company {
  name: string;
  document: string;
  phone: string;
  address: string;
  email?: string;
  link?: string;
}

export interface Customer {
  name?: string;
  document?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export interface HeaderData {
  company: Company;
  customer: Customer;
}

export interface SubheaderData {
  link?: string
}

export interface InvoiceDetails {
  note?: string;
}

export interface Invoice {
  header: HeaderData
  subheader: SubheaderData;
  details: InvoiceDetails;
  items: Item[];
}

export interface Item {
  name: string;
  quantity: number;
  value: number;
  type: ItemType;
  unit: UniteType;
}

export enum ItemType {
  SERVICE,
  PRODUCT,
}

export enum UniteType {
  UN,
  METER,
}

export enum PaymentType {
  PIX = 'PIX',
  CASH = 'CASH',
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

