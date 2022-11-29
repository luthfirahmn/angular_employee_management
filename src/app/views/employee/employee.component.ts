import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { HeaderService } from "src/app/components/template/header/header.service"

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Employee",
      icon: "person",
      routeUrl: "/employee"
    }
  }

  ngOnInit(): void {}

  navigateToEmployeeCreate(): void {
    this.router.navigate(["/employee/create"])
  }
}
