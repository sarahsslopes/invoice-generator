import {Module} from '@nestjs/common';
import {PrinterModule} from './infrastructure/printer/printer.module';
import {InvoiceModule} from './infrastructure/invoice-generator/invoice.module';

@Module({
  imports: [PrinterModule, InvoiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
