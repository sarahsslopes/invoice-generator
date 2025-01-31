import { Content } from 'pdfmake/interfaces';
import { CurrencyUtils } from '../../../@shared/utils';
import { ContentTitles, TableColumns } from '../../../@shared/model/invoice.model';
import { ItemDto } from '../../../dtos/invoice';
import { InvoiceDetailsDto } from '../../../dtos/invoice';
import { PaymentDto } from '../../../dtos/invoice';

export const getInvoiceContent = (details: InvoiceDetailsDto): Content => {
  const { note, payment, items } = details;

  return {
    stack: [
      getTableWithFooter(items),
      getNotes(note),
      getPaymentDetails(payment),
    ],
  };
};

const getPaymentDetails = ({
  accountBank,
  accountName,
  qrCode,
}: PaymentDto): Content => {
  return {
    style: 'content',
    alignment: 'left',
    stack: [
      {
        text: ContentTitles.payment,
        bold: true,
        fontSize: 13,
        color: '#3f51b5',
      },
      {
        text: accountBank,
      },
      {
        text: accountName,
      },
      {
        columns: [qrCode ? [{ qr: qrCode, fit: 90 }] : []],
        marginTop: 15,
      },
    ],
  };
};

const getTableWithFooter = (items: ItemDto[]): Content => {
  const total = items.reduce(
    (sum, item) => sum + item.value * item.quantity,
    0,
  );

  return {
    style: 'content',
    layout: {
      hLineWidth: () => 0,
      vLineWidth: () => 0,
      hLineColor: (i) => (i === 1 ? '#3f51b5' : '#CCCCCC'),
      vLineColor: () => '#FFFFFF',
      paddingLeft: () => 0,
      paddingRight: () => 0,
      paddingTop: () => 0,
      paddingBottom: () => 0,
    },
    table: {
      headerRows: 1,
      widths: ['*', '*', '*', '*', '*', '*', '*'],
      body: [
        [
          {
            text: TableColumns.code,
            style: 'tableHeader',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
          {
            text: TableColumns.name,
            style: 'tableHeader',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
          {
            text: TableColumns.type,
            style: 'tableHeader',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
          {
            text: TableColumns.value,
            style: 'tableHeader',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
          {
            text: TableColumns.quantity,
            style: 'tableHeader',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
          {
            text: TableColumns.unit,
            style: 'tableHeader',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
          {
            text: TableColumns.subtotal,
            style: 'tableHeader',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
        ],
        [
          { text: '', colSpan: 7, border: [true, false, true, false] },
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        ...items.map((item, index) => [
          { text: index + 1, alignment: 'center' },
          item.name,
          { text: item.type, alignment: 'center' },
          { text: CurrencyUtils.getBRL(item.value), alignment: 'right' },
          { text: item.quantity, alignment: 'center' },
          { text: item.unit, alignment: 'center' },
          {
            text: CurrencyUtils.getBRL(item.value * item.quantity),
            alignment: 'right',
          },
        ]),
        [
          { text: '', colSpan: 5, border: [false, false, false, false] },
          '',
          '',
          '',
          '',
          {
            text: 'Total:',
            bold: true,
            alignment: 'right',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
          {
            text: CurrencyUtils.getBRL(total),
            bold: true,
            alignment: 'right',
            fillColor: '#3f51b5',
            color: '#FFFFFF',
          },
        ],
      ],
    },
  };
};

const getNotes = (note: string): Content => {
  return {
    style: 'content',
    stack: [
      {
        text: ContentTitles.observations,
        color: '#3f51b5',
        bold: true,
        fontSize: 13,
      },
      {
        text: note ?? '',
        alignment: 'justify',
      },
    ],
  };
};
