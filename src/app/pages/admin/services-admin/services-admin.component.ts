import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AuthService } from "./../../../auth/auth.service";
import { ApiService } from "./../../../core/api.service";
import { UtilsService } from "./../../../core/utils.service";
import { FilterSortService } from "./../../../core/filter-sort.service";
import { Subscription } from "rxjs";
import { Service } from "./../../../core/models/services.model";

import { expandCollapse } from "./../../../core/expand-collapse.animation";

@Component({
  selector: 'app-services-admin',
  templateUrl: './services-admin.component.html',
  styleUrls: ['./services-admin.component.scss'],
  animations: [expandCollapse]
})
export class ServicesAdminComponent implements OnInit, OnDestroy {
  pageTitle = "Services";
  servicesSub: Subscription;
  servicesList: Service[];
  filteredServices: Service[];
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
    this._getServiceList();
    this.loadScript("../../../../assets/js/jquery.stellar.min.js");
    this.loadScript("../../../../assets/js/main.js");
    window.scrollTo({ top: -200, behavior: 'smooth' });
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

  private _getServiceList() {
    this.loading = true;

    // Get all (admin) events
    this.servicesSub = this.api.getServices$().subscribe(
      res => {
        this.servicesList = res;
        this.filteredServices = res;
        console.log(this.servicesList);
        this.loading = false;
      },
      err => {
        console.error(err);
        this.loading = false;
        this.error = true;
      }
    );
  }

  searchServices() {
    this.filteredServices = this.fs.search(this.servicesList, this.query, "_id");
  }

  resetQuery() {
    this.query = "";
    this.filteredServices = this.servicesList;
  }

  ngOnDestroy() {
    this.servicesSub.unsubscribe();
  }
}
