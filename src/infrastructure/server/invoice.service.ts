import { Injectable } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';
import { getInvoice } from '../../templates/invoice/invoice.template';
import { InvoiceBodyDto } from '../../dtos/invoice';

@Injectable()
export class InvoiceService {
  constructor(private readonly printerService: PrinterService) {}

  create(data: InvoiceBodyDto) {
    const docDefinition = getInvoice(data);
    return this.printerService.createPDF(docDefinition);
  }
}
