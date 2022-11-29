import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { HomeComponent } from "./views/home/home.component"
import { EmployeeComponent } from "./views/employee/employee.component"
import { EmployeeCreateComponent } from "./components/employee/employee-create/employee-create.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "employee",
    component: EmployeeComponent
  },
  {
    path: "employee/create",
    component: EmployeeCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
