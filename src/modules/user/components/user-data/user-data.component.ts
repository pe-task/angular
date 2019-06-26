import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '../../../../interfaces';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input() user: UserInterface;

  constructor() {
  }

  ngOnInit() {
  }
}
