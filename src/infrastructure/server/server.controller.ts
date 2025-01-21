import { Body, Controller, Get, Res } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Response } from 'express';
import { InvoiceBodyDto } from '../../dtos/invoice';

@Controller()
export class ServerController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('invoice')
  async createInvoice(@Body() data: InvoiceBodyDto, @Res() response: Response) {
    const pdf = this.invoiceService.create(data);
    response.setHeader('Content-Type', 'application/pdf');
    pdf.pipe(response);
    pdf.end();
  }
}
