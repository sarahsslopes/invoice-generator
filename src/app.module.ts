import { Module } from '@nestjs/common';
import { PrinterModule } from './infrastructure/printer/printer.module';
import { ServerModule } from './infrastructure/server/server.module';

@Module({
  imports: [PrinterModule, ServerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
