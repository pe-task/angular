import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule, MatIconModule } from "@angular/material";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./components/user/user.component";
import { UserCardComponent } from "./components/user-card/user-card.component";

@NgModule({
  declarations: [UserComponent, UserCardComponent],
  imports: [CommonModule, UserRoutingModule, MatToolbarModule, MatIconModule]
})
export class UserModule {}
