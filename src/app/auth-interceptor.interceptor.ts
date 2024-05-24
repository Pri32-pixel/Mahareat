import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  authToken: any;

  constructor(private auth:AuthService) {
    
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
      // console.log("res==>",res.token);
      this.authToken= sessionStorage.getItem('authToken');
  
    const modifiedReq = request.clone({
          // params: new HttpParams().set("auth", authToken)
          // setHeaders: {Authorization: `Bearer ${this.authToken.replace(/^["'](.+(?=["']$))["']$/, '$1')}`}
          setHeaders: { Authorization: `Bearer ${this.authToken}` }
          // setHeaders: { "auth": authToken }          

        });
        console.log("modifiedReq",modifiedReq);
        
    return next.handle(modifiedReq);
    // return next.handle(request);
  }
 
}
