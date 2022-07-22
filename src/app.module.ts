import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import {
  FacebookAuthController,
  GoogleAuthController,
} from './controllers/auth.controller';
import { AppService } from './app.service';
import {
  VerifyFacebookTokeniddleware,
  VerifyGoogleToken,
} from './middleware/auth-middleware.middleware';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  })],
  controllers: [AppController, FacebookAuthController, GoogleAuthController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  //apply middleware to auth
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VerifyFacebookTokeniddleware).forRoutes('facebook');
    consumer.apply(VerifyGoogleToken).forRoutes('google');
  }
}
