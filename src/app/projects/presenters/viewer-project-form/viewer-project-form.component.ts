import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../../models/project.model";

@Component({
  selector: "app-viewer-project-form",
  templateUrl: "./viewer-project-form.component.html",
  styleUrls: ["./viewer-project-form.component.css"]
})
export class ViewerProjectFormComponent implements OnInit {
  @Input() public project: Project;
  @Input() public project$: Observable<any>;
  public theProject: Project = null;
  constructor() {}

  ngOnInit(): void {
    if (this.project$) {
      this.project$.subscribe(
        next => {
          this.theProject = next[0];
        },
        err => console.log("error:", err),
        () => console.log("Completed")
      );
    } else {
      this.theProject = this.project;
    }
  }
}
