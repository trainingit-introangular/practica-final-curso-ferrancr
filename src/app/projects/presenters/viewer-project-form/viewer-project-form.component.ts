import { Component, Input, OnInit } from "@angular/core";
import { Project } from "../../models/project.model";
@Component({
  selector: "app-viewer-project-form",
  templateUrl: "./viewer-project-form.component.html",
  styleUrls: ["./viewer-project-form.component.css"]
})
export class ViewerProjectFormComponent implements OnInit {
  @Input() public theProject: Project;
  constructor() {}

  ngOnInit(): void {}
}
