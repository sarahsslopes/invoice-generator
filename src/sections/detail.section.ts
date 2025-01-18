import { Content } from 'pdfmake/interfaces';
import { CurrencyUtils } from '../@shared/utils';
import { InvoiceDetails } from "../models/invoice.model";

export const getNotes = (data: InvoiceDetails): Content => {
  const { note } = data;

  return {
    stack: [
      { text: 'Notes', color: '#3f51b5', bold: true, fontSize: 13 },
      { text: note ?? '' },
    ],
  };
};

export const getTable = (): Content => {
  return {
    layout: 'headerLineOnly',
    alignment: 'right',
    margin: [0, 50],
    table: {
      headerRows: 1,
      widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto'],
      body: [
        ['Nome', 'Qtd.', 'Valor', 'Tipo', 'Unidade', 'Subtotal'],
        ['Test', '1', CurrencyUtils.getBRL(250), 'Type', 'UN', 'Subtotal'],
        ['Test', '2', CurrencyUtils.getBRL(1458), 'Type', 'M', 'Subtotal'],
      ],
    },
  };
};
