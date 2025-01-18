import type { Content } from 'pdfmake/interfaces';
import { Company, Customer, HeaderData } from "../models/invoice.model";

export const headerSection = (data: HeaderData): Content => {
  const { company, customer } = data;

  return {
    style: 'header',
    columns: [getCompanyColumn(company), getCustomerColumn(customer)],
  };
};

const getCompanyColumn = (company: Company): Content => {
  return {
    alignment: 'left',
    stack: [
      company.name && { text: company.name, bold: true },
      company.document && { text: company.document },
      company.phone && { text: company.phone },
      company.email && { text: company.email },
      company.address && { text: company.address },
      company.link && { text: company.link },
    ].filter(Boolean),
  };
};

const getCustomerColumn = (customer: Customer): Content => {
  return {
    alignment: 'right',
    stack: [
      customer.name && { text: customer.name },
      customer.document && { text: customer.document },
      customer.phone && { text: customer.phone },
      customer.address && { text: customer.address },
    ].filter(Boolean),
  };
};
