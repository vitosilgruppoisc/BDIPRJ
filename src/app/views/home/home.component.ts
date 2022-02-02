import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services";
import {EUserRole} from "../../models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private userService: UserService, private router: Router) {
    console.log(userService.getUsername());
    console.log(userService.getRoles());
  }

  ngOnInit() {}

}
