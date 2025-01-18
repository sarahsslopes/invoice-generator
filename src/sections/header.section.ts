import type { Content } from 'pdfmake/interfaces';
import {
  Company,
  Customer,
  HeaderData,
} from '../models/invoice.model';

export const headerSection = ({ company, customer }: HeaderData): Content => {
  return {
    style: 'header',
    stack: [
      getLogo,
      {
        columns: [getCompanyColumn(company), getCustomerColumn(customer)],
      },
    ],
  };
};

const getLogo: Content = {
  image: 'src/@shared/assets/logo.jpeg',
  width: 100,
  alignment: 'left',
  margin: [0, 0, 0, 20],
};

const getCompanyColumn = (company: Company): Content => {
  return {
    alignment: 'left',
    stack: [
      company.name && { text: company.name, bold: true, fontSize: 13 },
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
