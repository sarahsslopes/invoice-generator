import { Injectable } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';
import { getInvoice } from '../../templates/invoice.template';
import { HeaderData } from "../../sections";

@Injectable()
export class InvoiceService {
  constructor(private readonly printerService: PrinterService) {}

  create(data: HeaderData) {
    const docDefinition = getInvoice(data);
    return this.printerService.createPDF(docDefinition);
  }
}
