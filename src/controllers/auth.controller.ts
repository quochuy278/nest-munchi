import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @Post()
  faceAuthToken(): string {
    return 'This action adds a new cat';
  }

  @Get()
  welcome(): string {
    return 'Welcome to auth-routes :)';
  }
}