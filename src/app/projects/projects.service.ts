import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Project } from "./models/project.model";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  public projects: Project[] = environment.projects;
  public project: Project;
  // private urlserver = environment.publicProjectsAPI;
  //  private remoteProjects = environment.remoteProjects;
  constructor() {}
  public prepare_new(): Project {
    return {
      id: this.projects.length,
      name: ""
    };
  }
  public save(project: Project): void {
    this.projects.push({ ...project });
  }
  public getProject(id): Project {
    return this.projects.filter(c => {
      return c.id === parseInt(id, 10);
    })[0];
    //
    // return this.projects[id];
  }
}
