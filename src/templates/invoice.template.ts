import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { getSubheader, headerSection } from '../sections';
import { getNotes, getTable } from '../sections/detail.section';
import { Invoice } from '../models/invoice.model';

const styles: StyleDictionary = {
  header: {
    fontSize: 12,
    marginTop: 50,
  },
  subheader: {
    marginTop: 5,
  },
};

const columnLogo: Content = {
  image: 'src/@shared/assets/logo.jpeg',
  width: 100,
  alignment: 'left',
  margin: [35, 20],
};

export const getInvoice = (data: Invoice): TDocumentDefinitions => {
  const { header, subheader, details } = data;

  return {
    header: columnLogo,
    content: [
      headerSection(header),
      getSubheader(subheader),
      getTable(),
      getNotes(details),
    ],
    styles,
  };
};
