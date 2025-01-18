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

export interface InvoiceDetails {
  items?: Item[];
  payment?: Payment;
  note?: string;
}

export interface Payment {
  qrCode?: string;
  accountBank?: string;
  accountName?: string;
}

export interface Invoice {
  header: HeaderData;
  details: InvoiceDetails;
}

export interface Item {
  name: string;
  quantity: number;
  value: number;
  type: ItemType;
  unit: UniteType;
}

export const TableColumns: Record<string, string> = {
  code: '#',
  name: 'Nome',
  type: 'Tipo',
  quantity: 'Qtd.',
  value: 'Valor',
  unit: 'Unidade',
  subtotal: 'Subtotal',
  total: 'Total',
};

export const ContentTitles: Record<string, string> = {
  date: 'Data',
  observations: 'Observações',
  payment: 'Dados de pagamento',
};

export enum ItemType {
  SERVICE = 'SERVIÇO',
  PRODUCT = 'PRODUTO',
}

export enum UniteType {
  UN,
  METER,
}
