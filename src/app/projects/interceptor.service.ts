import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { MessageStoreService } from "./message-store.service";

@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
  constructor(private messageStore: MessageStoreService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(this.handleHttp.bind(this)));
  }

  private handleHttp(http) {
    if (http.url) {
      // console.log("http", http);
      this.messageStore.dispatch(http.url);
    }
  }
}
