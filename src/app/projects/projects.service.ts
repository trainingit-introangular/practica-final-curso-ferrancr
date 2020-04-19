import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Project } from "./models/project.model";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  public projects: Project[] = environment.projects;
  public project: Project;
  private urlserver = environment.publicProjectsAPI;
  private remoteProjects = environment.remoteProjects;
  public projects$: Observable<any> = null;
  private searchId = 0;

  constructor(private httpClient: HttpClient) {
    if (this.remoteProjects) {
      this.projects$ = this.httpClient.get(this.urlserver);
    } else {
    }
  }

  public prepare_new(): Project {
    return {
      id: this.remoteProjects ? null : this.projects.length,
      name: ""
    };
  }
  public save(project: Project): void {
    if (this.remoteProjects) {
      this.POST(project);
    } else {
      this.projects.push({ ...project });
    }
  }
  public getProjects(nameFilter: string) {
    if (!this.remoteProjects) {
      this.projects$ = of(this.projects);
    }
    return this.projects$.pipe(
      map(apiData => {
        if (apiData) {
          console.log("Projects", apiData);
          return apiData.filter(c => c.name.search(nameFilter) >= 0);
        }
      })
    );
  }
  public getProject(id): Project {
    if (!this.remoteProjects) {
      return this.projects.filter(c => {
        return c.id === parseInt(id, 10);
      })[0];
    }
    return null;
  }
  public getProjectRemote(id): Observable<any> {
    if (this.remoteProjects) {
      return this.projects$.pipe(
        map(apiData => {
          const data = apiData.filter(c => {
            console.log("element", c);
            return c.id === id;
          });
          // console.log("filtrada", data);
          return data;
        })
      );
    }
    return null;
  }
  public isRemote() {
    return this.remoteProjects;
  }
  private POST(project: Project) {
    this.httpClient.post(this.urlserver, project).subscribe();
  }
}
