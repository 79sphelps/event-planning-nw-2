import { Component, OnInit, ElementRef, Renderer, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./../auth/auth.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: "app-navbar2",
  templateUrl: "./navbar2.component.html",
  styleUrls: ["./navbar2.component.scss"]
})
export class Navbar2Component implements OnInit {
  navbarOpen = false;
  @Input() clickOutside;

  constructor(
    private r: Router,
    public auth: AuthService,
    private el: ElementRef,
    private renderer: Renderer
  ) {}

  toggleNavbar() {
    console.log('navbar status: ' + this.navbarOpen);
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {}

  getActiveStatus(loc) {
    const active = 'class="nav-item active"';
    const inactive = 'class="nav-item"';
    if (this.r.url === loc) {
      return active;
    } else {
      return inactive;
    }
  }

  onMenuClick() {
    //this.el.nativeElement.querySelector('.navbar-ex1-collapse')  get the DOM
    //this.renderer.setElementClass('DOM-Element', 'css-class-you-want-to-add', false) if 3rd value is true
    //it will add the css class. 'in' class is responsible for showing the menu.
    //this.renderer.setElementClass(this.el.nativeElement.querySelector('.navbar-ex1-collapse'), 'in', false);
    this.navbarOpen = !this.navbarOpen;
  }
}
