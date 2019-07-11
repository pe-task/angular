import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import { CoreModule } from "../core";

import { UsersListRoutingModule } from "./users-list-routing.module";
import { UsersListComponent } from "./components/users-list/users-list.component";

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: []
})
export class UsersListModule {}
