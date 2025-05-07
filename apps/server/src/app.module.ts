import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { OpenaiService } from './openai/openai.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [OpenaiService],
})
export class AppModule {}
