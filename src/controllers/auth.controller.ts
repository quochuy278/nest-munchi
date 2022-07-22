import { Controller, Get, Next, Post, Req, Res } from '@nestjs/common';
import { Request, Response , NextFunction } from 'express';
import jwt from 'jsonwebtoken';

@Controller('facebook')
export class FacebookAuthController {
  @Post()
  faceAuthToken(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Response {
      const accessToken = req.body.accessToken;
      const user_id = req.body.user_id;
      const authenticatedToken = jwt.sign({acessToken: accessToken, userId: user_id},'secret')
    return res.status(200).json(authenticatedToken);
  }

  @Get()
  welcome(): string {
    return 'Welcome to auth-routes :)';
  }
}


@Controller('google')
export class GoogleAuthController {
  @Post()
  faceAuthToken(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Response {
    const accessToken = req.body.accessToken;
    const user_id = req.body.user_id;
    const authenticatedToken = jwt.sign(
      { accessToken: accessToken, userId: user_id },
      'secret',
    );
    return res.status(200).json(authenticatedToken);
  }

  @Get()
  welcome(): string {
    return 'Welcome to auth-routes :)';
  }
}