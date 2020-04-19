import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MessageStoreService {
  private messages = [];
  private messages$ = new BehaviorSubject<any[]>([]);
  constructor() {}

  public select$ = () => this.messages$.asObservable();

  public dispatch(message) {
    this.messages.push(message);
    this.messages$.next([...this.messages]);
  }
}
