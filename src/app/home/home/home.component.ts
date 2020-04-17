import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Project } from "../../projects/models/project.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public numProjects: number;
  public counterClass = "tag secondary";
  public formHidden = false;
  public projects: Project[] = environment.projects;

  constructor() {}

  ngOnInit(): void {
    this.numProjects = this.projects.length;
  }
}
