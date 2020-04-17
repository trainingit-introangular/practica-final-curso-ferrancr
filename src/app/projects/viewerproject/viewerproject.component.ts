import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project } from "../models/project.model";
import { ProjectsService } from "../projects.service";
@Component({
  selector: "app-viewerproject",
  templateUrl: "./viewerproject.component.html",
  styleUrls: ["./viewerproject.component.css"]
})
export class ViewerprojectComponent implements OnInit {
  public projectId: number;
  public theProject: Project;

  constructor(
    activateRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    this.projectId = activateRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.theProject = this.projectsService.getProject(this.projectId);
  }
}
