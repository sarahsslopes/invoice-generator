import { Injectable } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';
import { getInvoice } from '../../templates/invoice.template';
import { Invoice } from '../../models/invoice.model';

@Injectable()
export class InvoiceService {
  constructor(private readonly printerService: PrinterService) {}

  create(data: Invoice) {
    const docDefinition = getInvoice(data);
    return this.printerService.createPDF(docDefinition);
  }
}
