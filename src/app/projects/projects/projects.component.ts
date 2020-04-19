import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectsService } from "../projects.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  public header = "Projects";
  public description = "List of projects";
  public projects$: Observable<any> = null;
  public numProjects: number;
  public nameFilter: string;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.onFilter("");
    //  this.numProjects = this.projects.length;
  }
  onFilter(nameFilter: string) {
    this.nameFilter = nameFilter;
    this.projects$ = this.projectsService.getProjects(nameFilter);
  }
}
