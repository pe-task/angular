import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersResolver } from './resolvers';
import { PaginationResolver } from './resolvers/pagination.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      users: UsersResolver,
      paginationInfo: PaginationResolver
    },
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }
