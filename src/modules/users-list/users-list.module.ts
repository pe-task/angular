import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { CoreModule } from '../core';
import { UsersListResolver } from './resolvers/users-list.resolver';
import { UsersListRoutes } from './users-list.routes';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PageNumResolver } from './resolvers/page-num.resolver';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    UsersListRoutes,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    UsersListResolver,
    PageNumResolver
  ]
})
export class UsersListModule { }
