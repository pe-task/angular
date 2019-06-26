import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {CoreModule} from '../core';
import {UsersResolver} from './resolvers';
import {UsersListRoutingModule} from './users-list-routing.module';
import {UsersListComponent} from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
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
