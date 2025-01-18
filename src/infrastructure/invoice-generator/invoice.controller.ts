import { Body, Controller, Get, Res } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Response } from 'express';
import { Invoice } from '../../models/invoice.model';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  async createInvoice(@Body() data: Invoice, @Res() response: Response) {
    const pdf = this.invoiceService.create(data);
    response.setHeader('Content-Type', 'application/pdf');
    pdf.pipe(response);
    pdf.end();
  }
}
