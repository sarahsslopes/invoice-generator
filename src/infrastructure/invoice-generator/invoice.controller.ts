import { Body, Controller, Get, Res } from "@nestjs/common";
import { InvoiceService } from './invoice.service';
import { Response } from 'express';
import { HeaderData } from "../../sections";

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  async createInvoice(@Body() headerData: HeaderData, @Res() response: Response) {
    const pdf = this.invoiceService.create(headerData);

    response.setHeader('Content-Type', 'application/pdf');
    pdf.pipe(response);
    pdf.end();
  }
}
