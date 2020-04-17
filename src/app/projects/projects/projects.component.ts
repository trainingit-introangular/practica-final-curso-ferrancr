import { Component, OnInit } from "@angular/core";
import { Project } from "../models/project.model";
import { ProjectsService } from "../projects.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  public header = "Projects";
  public description = "List of projects";
  public projects: Project[];
  public numProjects: number;
  public nameFilter: string;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.projects;
    this.numProjects = this.projects.length;
  }
  onFilter(nameFilter: string) {
    this.nameFilter = nameFilter;
    this.projects = this.projectsService.projects.filter(
      c => c.name.search(nameFilter) >= 0
    );
  }
}
