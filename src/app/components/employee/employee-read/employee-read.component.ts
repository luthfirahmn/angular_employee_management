import { EmployeeService } from "./../employee.service"
import { Component, OnInit, ViewChild } from "@angular/core"
import { Employee } from "../employee.model"
import { MatPaginator } from "@angular/material/paginator"
import { MatTableDataSource } from "@angular/material/table"
import { MatSort } from "@angular/material/sort"

@Component({
  selector: "app-employee-read",
  templateUrl: "./employee-read.component.html",
  styleUrls: ["./employee-read.component.css"]
})
export class EmployeeReadComponent implements OnInit {
  employee: Employee[] = []
  dataSource: any
  displayedColumns = [
    "id",
    "username",
    "fullName",
    "email",
    "birthDate",
    "basicSalary",
    "status",
    "group",
    "description",
    "action"
  ]

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.read().subscribe((employee) => {
      this.employee = employee
      console.log(employee)

      this.dataSource = new MatTableDataSource<Employee>(this.employee)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }
}
