import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { ServerController } from './server.controller';
import { PrinterModule } from '../printer/printer.module';

@Module({
  controllers: [ServerController],
  providers: [InvoiceService],
  imports: [PrinterModule],
})
export class ServerModule {}
