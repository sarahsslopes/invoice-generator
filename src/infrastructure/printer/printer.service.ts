import { Injectable } from '@nestjs/common';

import PdfPrinter from 'pdfmake';
import type { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
  Roboto: {
    normal: 'src/@shared/fonts/roboto/Roboto-Regular.ttf',
    bold: 'src/@shared/fonts/roboto/Roboto-Bold.ttf',
    italic: 'src/@shared/fonts/roboto/Roboto-Italic.ttf',
    bolditalics: 'src/@shared/fonts/roboto/Roboto-MediumItalic.ttf',
  },
};

@Injectable()
export class PrinterService {
  private printer = new PdfPrinter(fonts);

  createPDF(
    document: TDocumentDefinitions,
    options: BufferOptions = {},
  ): PDFKit.PDFDocument {
    return this.printer.createPdfKitDocument(document, options);
  }
}
