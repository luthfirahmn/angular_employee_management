import { Router } from "@angular/router"
import { Component, OnInit } from "@angular/core"
import { EmployeeService } from "../employee.service"
import { Employee } from "../employee.model"

@Component({
  selector: "app-employee-create",
  templateUrl: "./employee-create.component.html",
  styleUrls: ["./employee-create.component.css"]
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: new Date(Date.now()),
    basicSalary: 0,
    status: "",
    group: "",
    description: ""
  }

  maxDate = new Date()

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createEmployee(): void {
    this.employeeService.create(this.employee).subscribe(() => {
      this.employeeService.showMessage("Success Add Create Data")
      this.router.navigate(["/employee"])
    })
  }

  cancel(): void {
    this.router.navigate(["/employee"])
  }
}
