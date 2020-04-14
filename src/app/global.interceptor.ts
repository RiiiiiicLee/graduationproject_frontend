import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const token: string = 'Bearer ' + window.localStorage.getItem('auth_token')
        const authReq = req.clone({
            headers: req.headers.set('Auth', token)
        });
        return next.handle(authReq);
    }
}