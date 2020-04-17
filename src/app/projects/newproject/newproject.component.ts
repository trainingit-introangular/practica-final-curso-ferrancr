import { Component, OnInit } from "@angular/core";
import { Project } from "../../projects/models/project.model";
import { ProjectsService } from "../projects.service";

@Component({
  selector: "app-newproject",
  templateUrl: "./newproject.component.html",
  styleUrls: ["./newproject.component.css"]
})
export class NewprojectComponent implements OnInit {
  public project: Project;
  public isNew: boolean;

  constructor(private projectsService: ProjectsService) {}
  ngOnInit(): void {
    this.project = this.projectsService.prepare_new();
    this.isNew = true;
  }
  // Practica w3, w4
  public new(): void {
    this.projectsService.save(this.project);
    this.isNew = false;
  }
  // Practica w4
  public onAdded(added: Project) {
    this.project = added;
    this.new();
  }
}
