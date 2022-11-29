import { NgModule, LOCALE_ID } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HeaderComponent } from "./components/template/header/header.component"

import { MatToolbarModule } from "@angular/material/toolbar"
import { FooterComponent } from "./components/template/footer/footer.component"
import { NavComponent } from "./components/template/nav/nav.component"

import { MatSidenavModule } from "@angular/material/sidenav"
import { MatCardModule } from "@angular/material/card"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "./views/home/home.component"
import { EmployeeComponent } from "./views/employee/employee.component"
import { RedDirective } from "./directives/red.directive"
import { ForDirective } from "./directives/for.directive"
import { MatButtonModule } from "@angular/material/button"
import { MatSnackBarModule } from "@angular/material/snack-bar"

import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from "@angular/material/core"
import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator"
import { MatSortModule } from "@angular/material/sort"

import localePt from "@angular/common/locales/pt"
import { registerLocaleData } from "@angular/common"
import { EmployeeReadComponent } from "./components/employee/employee-read/employee-read.component"
import { EmployeeCreateComponent } from "./components/employee/employee-create/employee-create.component"

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EmployeeComponent,
    RedDirective,
    ForDirective,
    EmployeeReadComponent,
    EmployeeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
