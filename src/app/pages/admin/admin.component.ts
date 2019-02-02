// src/app/pages/admin/admin.component.ts
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AuthService } from "./../../auth/auth.service";
import { ApiService } from "./../../core/api.service";
import { UtilsService } from "./../../core/utils.service";
import { FilterSortService } from "./../../core/filter-sort.service";
import { Subscription } from "rxjs";
import { EventModel } from "./../../core/models/event.model";

import { expandCollapse } from "./../../core/expand-collapse.animation";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
  animations: [expandCollapse]
})
export class AdminComponent implements OnInit, OnDestroy {
  pageTitle = "Event Administration";
  eventsSub: Subscription;
  eventList: EventModel[];
  filteredEvents: EventModel[];
  loading: boolean;
  error: boolean;
  query = "";

  constructor(
    private title: Title,
    public auth: AuthService,
    private api: ApiService,
    public utils: UtilsService,
    public fs: FilterSortService
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getEventList();
    this.loadStyle("../../../../node_modules/font-awesome/scss/font-awesome.scss");
    //this.loadStyle("../../../assets/css/style.css");
    this.loadScript("../../../assets/js/main.js");
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  public loadStyle(styl: string) {
    const head = <HTMLHeadElement>document.head;
    const style = document.createElement('link');
    style.innerHTML = "";
    style.rel = styl;
    //style.async = false;
    //style.defer = true;
    head.appendChild(style);
  }

  //getBackground(image) {
  //  return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url('../../${image}')`);
  //}

  private _getEventList() {
    this.loading = true;

    // Get all (admin) events
    this.eventsSub = this.api.getAdminEvents$().subscribe(
      res => {
        this.eventList = res;
        this.filteredEvents = res;
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  searchEvents() {
    this.filteredEvents = this.fs.search(this.eventList, this.query, "_id");
  }

  resetQuery() {
    this.query = "";
    this.filteredEvents = this.eventList;
  }

  ngOnDestroy() {
    this.eventsSub.unsubscribe();
  }
}
