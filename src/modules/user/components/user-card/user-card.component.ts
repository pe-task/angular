import { Component, Input } from "@angular/core";
import { UserInterface } from "src/interfaces";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent {
  @Input() user: UserInterface;
}
