import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/wallet')
  getWallets(): string {
    return this.appService.getWallets();
  }

  @Post('/api/auth/register')
  registration(@Body() user: any): any {
    return this.appService.registration(user);
  }

  @Post('/api/auth/login')
  login(@Body() user: any): any {
    return this.appService.login(user)
  }
}
