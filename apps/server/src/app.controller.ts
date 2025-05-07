import { Controller, Post, Body } from '@nestjs/common';
import { OpenaiService } from './openai/openai.service';

@Controller()
export class AppController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('ask')
  async askQuestion(@Body('question') question: string) {
    const answer = await this.openaiService.ask(question);
    return { answer };
  }
}
