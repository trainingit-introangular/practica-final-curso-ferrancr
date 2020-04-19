import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Project } from "../models/project.model";
import { ProjectsService } from "../projects.service";
@Component({
  selector: "app-viewerproject",
  templateUrl: "./viewerproject.component.html",
  styleUrls: ["./viewerproject.component.css"]
})
export class ViewerprojectComponent implements OnInit {
  public projectId: number;
  public project: Project;
  public project$: Observable<any> = null;

  constructor(
    activateRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    this.projectId = activateRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    if (this.projectsService.isRemote()) {
      this.project = null;
      this.project$ = this.projectsService.getProjectRemote(this.projectId);
    } else {
      this.project = this.projectsService.getProject(this.projectId);
      this.project$ = null;
    }
  }
}
