import { Component, OnInit } from "@angular/core";
import { NavItem } from "../navItem";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  items: NavItem[];

  ngOnInit() {
    this.items = [
      { title: "Home", url: "/" },
      { title: "Food", url: "/food" },
      { title: "About", url: "/about" },
    ];
  }
}
