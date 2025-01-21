import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections';
import { getInvoiceContent } from './sections';
import { InvoiceBodyDto } from '../../dtos/invoice';

const styles: StyleDictionary = {
  header: {
    fontSize: 12,
  },
  content: {
    fontSize: 12,
    margin: [0, 20, 0, 0],
  },
  tableHeaderStyle: {
    fontSize: 12,
    bold: true,
    color: '#3f51b5',
    alignment: 'center',
  },
};

export const getInvoice = (data: InvoiceBodyDto): TDocumentDefinitions => {
  const { header, details } = data;

  return {
    pageMargins: 60,
    content: [headerSection(header), getInvoiceContent(details)],
    styles,
  };
};
