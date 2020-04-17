import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filter-projects-form",
  templateUrl: "./filter-projects-form.component.html",
  styleUrls: ["./filter-projects-form.component.css"]
})
export class FilterProjectsFormComponent implements OnInit {
  @Input() public nameFilter: string;
  @Output() public eventFilter = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  public send(): void {
    this.eventFilter.emit(this.nameFilter);
  }
}
