import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { Project } from "../../models/project.model";

@Component({
  selector: "app-new-project-form",
  templateUrl: "./new-project-form.component.html",
  styleUrls: ["./new-project-form.component.css"]
})
export class NewProjectFormComponent implements OnInit {
  @Input() public isNew: boolean;
  @Input() public project: Project;
  @Output() public add = new EventEmitter<Project>();

  public formModel: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }
  new(): void {
    this.add.emit(this.formModel.value);
  }
  public buildForm(): void {
    this.formModel = this.formBuilder.group({
      id: [this.project.id, [Validators.required, this.isNumeric]],
      name: [this.project.name, Validators.required]
    });
  }
  public getError(controlName: string): string {
    let error = "";
    const control = this.formModel.get(controlName);
    if (control.touched && control.errors != null) {
      error = "Error:" + JSON.stringify(control.errors);
    }
    return error;
  }
  public isNumeric(control: AbstractControl) {
    return isNaN(control.value) ? { number: "its must number" } : null;
  }
}
