import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { PrinterModule } from '../printer/printer.module';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService],
  imports: [PrinterModule],
})
export class InvoiceModule {}
