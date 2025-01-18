import { Content } from 'pdfmake/interfaces';
import { SubheaderData } from "../models/invoice.model";

export const getSubheader = (data: SubheaderData): Content => {
  const { link } = data

  return {
    style: 'subheader',
    alignment: 'right',
    columns: [link && {qr: link, fit: 75}],
  };
};
