import { DynamicModule, Global, Module } from '@nestjs/common';
import { MailModuleOptions } from './mail.interfaces';
import { MAIL_OPTIONS } from '../common/common.constants';
import { MailService } from './mail.service';

@Module({})
@Global()
export class MailModule {
  static forRoot(options: MailModuleOptions): DynamicModule {
    return {
      module: MailModule,
      providers: [{ provide: MAIL_OPTIONS, useValue: options }, MailService],
      exports: [MailService],
    };
  }
}
