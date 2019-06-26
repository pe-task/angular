import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {UsersResolver} from './resolvers';
import {UsersListRoutingModule} from './users-list-routing.module';
import {UsersListComponent} from './components/users-list/users-list.component';
import {CoreModule} from '../core';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule,
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [
    UsersResolver
  ]
})
export class UsersListModule {
}
