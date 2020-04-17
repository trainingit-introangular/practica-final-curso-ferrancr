import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  @Input() public numProjects: number;
  @Input() public header: string;
  public counterClass = "tag secondary";
  constructor() {}

  ngOnInit(): void {}
}
