import { Component, OnInit } from "@angular/core";
import { MessageStoreService } from "../../../projects/message-store.service";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  public notes$;

  constructor(private messagesStore: MessageStoreService) {}

  ngOnInit(): void {
    this.notes$ = this.messagesStore.select$();
  }
}
