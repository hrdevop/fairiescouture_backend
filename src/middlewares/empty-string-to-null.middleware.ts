import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class EmptyStringToNullMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (req.method === 'POST' && req.body) {
      if (Array.isArray(req.body)) {
        req.body.forEach(d => {
          this.setNull(d)
        })
      } else {
        this.setNull(req.body)
      }
    }
    next();
  }
  setNull(data: Object) {
    for (let key in data) {
      if (typeof data[key] === 'object' && Object.prototype.toString.call(data[key]) === '[object Object]') {
        this.setNull(data[key])
      } else if (data[key] == '') {
        data[key] = null
      }
    }
  }

}
