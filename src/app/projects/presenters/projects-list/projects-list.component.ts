import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
@Component({
  selector: "app-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.css"]
})
export class ProjectsListComponent implements OnInit {
  @Input() public projects$: Observable<any>;
  @Input() public description: string;
  constructor() {}

  ngOnInit(): void {}
}
