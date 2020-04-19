import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InterceptorService } from "./interceptor.service";
import { NewprojectComponent } from "./newproject/newproject.component";
import { DashboardComponent } from "./presenters/dashboard/dashboard.component";
import { FilterProjectsFormComponent } from "./presenters/filter-projects-form/filter-projects-form.component";
import { NewProjectFormComponent } from "./presenters/new-project-form/new-project-form.component";
import { ProjectsListComponent } from "./presenters/projects-list/projects-list.component";
import { ViewerProjectFormComponent } from "./presenters/viewer-project-form/viewer-project-form.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects/projects.component";
import { ViewerprojectComponent } from "./viewerproject/viewerproject.component";

@NgModule({
  declarations: [
    ProjectsComponent,
    NewprojectComponent,
    ViewerprojectComponent,
    DashboardComponent,
    FilterProjectsFormComponent,
    ProjectsListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class ProjectsModule {}
