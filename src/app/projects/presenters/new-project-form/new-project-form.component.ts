import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Project } from "../../models/project.model";

@Component({
  selector: "app-new-project-form",
  templateUrl: "./new-project-form.component.html",
  styleUrls: ["./new-project-form.component.css"]
})
export class NewProjectFormComponent implements OnInit {
  @Input() public isNew: boolean;
  @Input() public project: Project;
  @Output() public add = new EventEmitter<Project>();
  constructor() {}

  ngOnInit(): void {}
  new(): void {
    this.add.emit(this.project);
  }
}
